"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import styles from './ProductFormModal.module.css';
import ImageUploader from './ImageUploader';
import { supabasePost, supabasePatch, supabaseGet } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';

interface ProductFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  branchId: string;
  product?: any; // If provided, edit mode. If null, create mode.
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
};

export default function ProductFormModal({
  isOpen,
  onClose,
  onSuccess,
  branchId,
  product
}: ProductFormModalProps) {
  const { jwt } = useAuth();
  
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isEditMode = !!product;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      fetchCategories();
      
      if (product) {
        setTitle(product.title);
        setPrice(product.price.toString());
        setCategoryId(product.category_id);
        setImageUrl(product.image_url);
        setIsAvailable(product.is_available);
      } else {
        // Reset form for create mode
        setTitle('');
        setPrice('');
        setCategoryId('');
        setImageUrl('');
        setIsAvailable(true);
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, product]);

  const fetchCategories = async () => {
    try {
      const data = await supabaseGet('categories', 'select=*', jwt);
      setCategories(data);
      if (data.length > 0 && !product) {
        setCategoryId(data[0].id);
      }
    } catch (err) {
      console.error('Failed to fetch categories', err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (!title || !price || !categoryId || !imageUrl) {
      setError('Please fill in all required fields and upload an image.');
      setIsLoading(false);
      return;
    }

    const payload = {
      title,
      price: parseFloat(price),
      category_id: categoryId,
      branch_id: branchId,
      image_url: imageUrl,
      is_available: isAvailable,
    };

    try {
      if (isEditMode) {
        await supabasePatch('products', `id=eq.${product.id}`, payload, jwt);
      } else {
        await supabasePost('products', payload, jwt);
      }
      onSuccess();
    } catch (err: any) {
      setError(err.message || 'Failed to save product');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay}>
          <motion.div
            className={styles.backdrop}
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={isLoading ? undefined : onClose}
          />
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className={styles.header}>
              <h2 className={styles.title}>{isEditMode ? 'Edit Product' : 'Add New Product'}</h2>
              <button 
                className={styles.closeButton} 
                onClick={onClose}
                disabled={isLoading}
              >
                <FiX />
              </button>
            </div>
            
            <div className={styles.content}>
              {error && <div className={styles.error}>{error}</div>}
              
              <form id="product-form" onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="title">Product Name *</label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className={styles.input}
                    placeholder="e.g. Wagyu Ribeye"
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="price">Price ($) *</label>
                    <input
                      id="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      required
                      className={styles.input}
                      placeholder="e.g. 45.00"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="category">Category *</label>
                    <select
                      id="category"
                      value={categoryId}
                      onChange={(e) => setCategoryId(e.target.value)}
                      required
                      className={styles.select}
                    >
                      <option value="" disabled>Select category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Product Image *</label>
                  <ImageUploader 
                    currentImageUrl={imageUrl} 
                    onImageUploaded={setImageUrl} 
                  />
                </div>

                <div className={styles.toggleGroup}>
                  <label htmlFor="availability" className={styles.toggleLabel}>
                    Available for purchase
                  </label>
                  <div className={styles.toggleWrapper}>
                    <input
                      id="availability"
                      type="checkbox"
                      checked={isAvailable}
                      onChange={(e) => setIsAvailable(e.target.checked)}
                      className={styles.toggleInput}
                    />
                    <div className={styles.toggleTrack}>
                      <div className={styles.toggleThumb}></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <div className={styles.footer}>
              <button 
                className={styles.cancelButton} 
                onClick={onClose}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button 
                type="submit"
                form="product-form"
                className={styles.saveButton} 
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Save Product'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
