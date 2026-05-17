"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { supabaseGet, supabasePost, supabaseDelete, supabasePatch, deleteImage } from '../../lib/supabaseClient';
import styles from './AdminDashboard.module.css';
import ProductFormModal from './ProductFormModal';
import ConfirmModal from './ConfirmModal';
import { FiLogOut, FiPlus, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';
import Image from 'next/image';

export default function AdminDashboard() {
  const { logout, jwt } = useAuth();
  
  const [branches, setBranches] = useState<any[]>([]);
  const [selectedBranchId, setSelectedBranchId] = useState<string>('');
  const [isAddingBranch, setIsAddingBranch] = useState(false);
  const [editingBranchId, setEditingBranchId] = useState<string | null>(null);
  const [newBranchName, setNewBranchName] = useState('');
  const [newBranchAddress, setNewBranchAddress] = useState('');
  
  const [categories, setCategories] = useState<any[]>([]);
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState<string | null>(null);
  const [newCategoryName, setNewCategoryName] = useState('');
  
  const [products, setProducts] = useState<any[]>([]);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterAvailability, setFilterAvailability] = useState<'all' | 'available' | 'unavailable'>('all');
  
  // Modals state
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  
  const [deleteTarget, setDeleteTarget] = useState<{type: 'product' | 'branch' | 'category', data: any} | null>(null);

  useEffect(() => {
    fetchBranches();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedBranchId) {
      fetchProducts(selectedBranchId);
    } else {
      setProducts([]);
    }
  }, [selectedBranchId]);

  const fetchBranches = async () => {
    try {
      const data = await supabaseGet('branches', 'select=*', jwt);
      setBranches(data);
      if (data.length > 0 && !selectedBranchId) {
        setSelectedBranchId(data[0].id);
      }
    } catch (err) {
      console.error('Failed to fetch branches', err);
    }
  };

  const fetchCategories = async () => {
    try {
      const data = await supabaseGet('categories', 'select=*', jwt);
      setCategories(data);
    } catch (err) {
      console.error('Failed to fetch categories', err);
    }
  };

  const fetchProducts = async (branchId: string) => {
    setIsLoadingProducts(true);
    try {
      const data = await supabaseGet('products', `branch_id=eq.${branchId}&select=*,categories(name),branches(location_name)`, jwt);
      setProducts(data);
    } catch (err) {
      console.error('Failed to fetch products', err);
    } finally {
      setIsLoadingProducts(false);
    }
  };

  const handleAddOrEditBranch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBranchName || !newBranchAddress) return;
    
    try {
      if (editingBranchId) {
        await supabasePatch('branches', `id=eq.${editingBranchId}`, {
          location_name: newBranchName,
          address: newBranchAddress
        }, jwt);
        setEditingBranchId(null);
      } else {
        await supabasePost('branches', {
          location_name: newBranchName,
          address: newBranchAddress
        }, jwt);
        setIsAddingBranch(false);
      }
      setNewBranchName('');
      setNewBranchAddress('');
      await fetchBranches();
    } catch (err) {
      console.error('Failed to save branch', err);
      alert('Failed to save branch');
    }
  };

  const handleAddOrEditCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCategoryName) return;
    
    try {
      if (editingCategoryId) {
        await supabasePatch('categories', `id=eq.${editingCategoryId}`, {
          name: newCategoryName
        }, jwt);
        setEditingCategoryId(null);
      } else {
        await supabasePost('categories', {
          name: newCategoryName
        }, jwt);
        setIsAddingCategory(false);
      }
      setNewCategoryName('');
      await fetchCategories();
    } catch (err) {
      console.error('Failed to save category', err);
      alert('Failed to save category');
    }
  };

  const handleToggleAvailability = async (product: any) => {
    try {
      const newAvailability = !product.is_available;
      await supabasePatch('products', `id=eq.${product.id}`, { is_available: newAvailability }, jwt);
      setProducts(products.map(p => p.id === product.id ? { ...p, is_available: newAvailability } : p));
    } catch (err) {
      console.error('Failed to update availability', err);
      alert('Failed to update availability');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    
    try {
      if (deleteTarget.type === 'product') {
        if (deleteTarget.data.image_url) {
          const urlParts = deleteTarget.data.image_url.split('/');
          const fileName = urlParts[urlParts.length - 1];
          try {
            await deleteImage(fileName, jwt);
          } catch (imgErr) {
            console.error('Failed to delete image, continuing with product deletion', imgErr);
          }
        }
        await supabaseDelete('products', `id=eq.${deleteTarget.data.id}`, jwt);
        setProducts(products.filter(p => p.id !== deleteTarget.data.id));
      } else if (deleteTarget.type === 'branch') {
        await supabaseDelete('branches', `id=eq.${deleteTarget.data.id}`, jwt);
        await fetchBranches();
        if (selectedBranchId === deleteTarget.data.id) {
          setSelectedBranchId('');
        }
      } else if (deleteTarget.type === 'category') {
        await supabaseDelete('categories', `id=eq.${deleteTarget.data.id}`, jwt);
        await fetchCategories();
      }
      setDeleteTarget(null);
    } catch (err: any) {
      console.error('Failed to delete', err);
      alert('Failed to delete: ' + (err.message || 'Check if there are products linked to this item.'));
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterAvailability === 'all' 
      ? true 
      : filterAvailability === 'available' 
        ? p.is_available 
        : !p.is_available;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className={styles.container}>
      {/* Top Admin Bar */}
      <div className={styles.adminBar}>
        <h1 className={styles.pageTitle}>Product Management</h1>
        <button onClick={logout} className={styles.logoutButton}>
          <FiLogOut /> Logout
        </button>
      </div>

      <div className={styles.topSections}>
        {/* Branch Selector Section */}
        <div className={styles.branchSection}>
        <div className={styles.branchHeader}>
          <h2 className={styles.sectionTitle}>Branch Selection</h2>
          {!isAddingBranch && !editingBranchId && (
            <button onClick={() => setIsAddingBranch(true)} className={styles.addBranchButton}>
              <FiPlus /> Add Branch
            </button>
          )}
        </div>

        {(isAddingBranch || editingBranchId) && (
          <form onSubmit={handleAddOrEditBranch} className={styles.addBranchForm}>
            <input 
              type="text" 
              placeholder="Location Name" 
              value={newBranchName} 
              onChange={e => setNewBranchName(e.target.value)} 
              required
              className={styles.input}
            />
            <input 
              type="text" 
              placeholder="Address" 
              value={newBranchAddress} 
              onChange={e => setNewBranchAddress(e.target.value)} 
              required
              className={styles.input}
            />
            <div className={styles.branchFormActions}>
              <button type="submit" className={styles.primaryBtn}>Save</button>
              <button type="button" onClick={() => { setIsAddingBranch(false); setEditingBranchId(null); setNewBranchName(''); setNewBranchAddress(''); }} className={styles.secondaryBtn}>Cancel</button>
            </div>
          </form>
        )}

        {branches.length > 0 ? (
          <div className={styles.branchSelector}>
            <label htmlFor="branch-select">Current Branch:</label>
            <select 
              id="branch-select" 
              value={selectedBranchId} 
              onChange={e => setSelectedBranchId(e.target.value)}
              className={styles.select}
            >
              {branches.map(b => (
                <option key={b.id} value={b.id}>{b.location_name}</option>
              ))}
            </select>
            {selectedBranchId && (
              <div className={styles.actionButtons}>
                <button 
                  className={styles.iconBtn} 
                  title="Edit Branch"
                  onClick={() => {
                    const b = branches.find(br => br.id === selectedBranchId);
                    if (b) {
                      setNewBranchName(b.location_name);
                      setNewBranchAddress(b.address);
                      setEditingBranchId(b.id);
                      setIsAddingBranch(false);
                    }
                  }}
                >
                  <FiEdit2 />
                </button>
                <button 
                  className={`${styles.iconBtn} ${styles.deleteBtn}`} 
                  title="Delete Branch"
                  onClick={() => {
                    const b = branches.find(br => br.id === selectedBranchId);
                    if (b) setDeleteTarget({ type: 'branch', data: b });
                  }}
                >
                  <FiTrash2 />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No branches exist yet. Please add a branch first.</p>
          </div>
        )}
      </div>

      {/* Category Management Section */}
      <div className={styles.categorySection}>
        <div className={styles.branchHeader}>
          <h2 className={styles.sectionTitle}>Categories</h2>
          {!isAddingCategory && !editingCategoryId && (
            <button onClick={() => setIsAddingCategory(true)} className={styles.addBranchButton}>
              <FiPlus /> Add Category
            </button>
          )}
        </div>

        {(isAddingCategory || editingCategoryId) && (
          <form onSubmit={handleAddOrEditCategory} className={styles.addBranchForm}>
            <input 
              type="text" 
              placeholder="Category Name" 
              value={newCategoryName} 
              onChange={e => setNewCategoryName(e.target.value)} 
              required
              className={styles.input}
            />
            <div className={styles.branchFormActions}>
              <button type="submit" className={styles.primaryBtn}>Save</button>
              <button type="button" onClick={() => { setIsAddingCategory(false); setEditingCategoryId(null); setNewCategoryName(''); }} className={styles.secondaryBtn}>Cancel</button>
            </div>
          </form>
        )}

        {categories.length > 0 ? (
          <div className={styles.categoryList}>
            {categories.map(c => (
              <div key={c.id} className={styles.categoryItem}>
                <span className={styles.categoryBadgeStatic}>{c.name}</span>
                <button 
                  className={styles.iconBtnSmall} 
                  title="Edit Category"
                  onClick={() => {
                    setNewCategoryName(c.name);
                    setEditingCategoryId(c.id);
                    setIsAddingCategory(false);
                  }}
                >
                  <FiEdit2 size={12} />
                </button>
                <button 
                  className={`${styles.iconBtnSmall} ${styles.deleteBtn}`} 
                  title="Delete Category"
                  onClick={() => setDeleteTarget({ type: 'category', data: c })}
                >
                  <FiTrash2 size={12} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p>No categories exist yet.</p>
          </div>
        )}
      </div>
      </div>

      {/* Product Grid Section */}
      {selectedBranchId && (
        <div className={styles.productSection}>
          <div className={styles.productHeader}>
            <h2 className={styles.sectionTitle}>Products</h2>
            <button 
              onClick={() => {
                setEditingProduct(null);
                setIsProductModalOpen(true);
              }} 
              className={styles.addProductBtn}
            >
              <FiPlus /> Add Product
            </button>
          </div>

          <div className={styles.filtersBar}>
            <div className={styles.searchBox}>
              <FiSearch className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            
            <div className={styles.filterGroup}>
              <select 
                value={filterAvailability} 
                onChange={e => setFilterAvailability(e.target.value as any)}
                className={styles.filterSelect}
              >
                <option value="all">All Statuses</option>
                <option value="available">Available Only</option>
                <option value="unavailable">Unavailable Only</option>
              </select>
            </div>
          </div>

          {isLoadingProducts ? (
            <div className={styles.loadingState}>Loading products...</div>
          ) : filteredProducts.length > 0 ? (
            <div className={styles.grid}>
              {filteredProducts.map(product => (
                <div key={product.id} className={styles.card}>
                  <div className={styles.cardImageContainer}>
                    {product.image_url ? (
                      <Image 
                        src={product.image_url} 
                        alt={product.title} 
                        fill
                        className={styles.cardImage}
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    ) : (
                      <div className={styles.noImage}>No Image</div>
                    )}
                    <div className={styles.categoryBadge}>
                      {product.categories?.name || 'Uncategorized'}
                    </div>
                  </div>
                  
                  <div className={styles.cardContent}>
                    <div className={styles.cardTop}>
                      <h3 className={styles.cardTitle}>{product.title}</h3>
                      <span className={styles.cardPrice}>${product.price.toFixed(2)}</span>
                    </div>
                    
                    <div className={styles.cardActions}>
                      <div className={styles.toggleWrapper}>
                        <label className={styles.switch}>
                          <input 
                            type="checkbox" 
                            checked={product.is_available} 
                            onChange={() => handleToggleAvailability(product)}
                          />
                          <span className={styles.slider}></span>
                        </label>
                        <span className={styles.toggleLabel}>
                          {product.is_available ? 'Available' : 'Hidden'}
                        </span>
                      </div>
                      
                      <div className={styles.actionButtons}>
                        <button 
                          className={styles.iconBtn} 
                          title="Edit"
                          onClick={() => {
                            setEditingProduct(product);
                            setIsProductModalOpen(true);
                          }}
                        >
                          <FiEdit2 />
                        </button>
                        <button 
                          className={`${styles.iconBtn} ${styles.deleteBtn}`} 
                          title="Delete"
                          onClick={() => setDeleteTarget({ type: 'product', data: product })}
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p>No products found for this branch matching your filters.</p>
            </div>
          )}
        </div>
      )}

      {/* Modals */}
      <ProductFormModal 
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        onSuccess={() => {
          setIsProductModalOpen(false);
          fetchProducts(selectedBranchId);
        }}
        branchId={selectedBranchId}
        product={editingProduct}
      />

      <ConfirmModal 
        isOpen={!!deleteTarget}
        title={`Delete ${deleteTarget?.type === 'branch' ? 'Branch' : deleteTarget?.type === 'category' ? 'Category' : 'Product'}`}
        message={`Are you sure you want to delete "${deleteTarget?.data.title || deleteTarget?.data.name || deleteTarget?.data.location_name}"? This action cannot be undone.`}
        confirmText="Delete"
        onConfirm={handleDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
