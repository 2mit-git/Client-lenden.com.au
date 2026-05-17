"use client";

import React, { useState, useRef } from 'react';
import styles from './ImageUploader.module.css';
import { uploadImage } from '../../lib/supabaseClient';
import { useAuth } from '../../context/AuthContext';
import { FiUploadCloud } from 'react-icons/fi';

interface ImageUploaderProps {
  currentImageUrl?: string;
  onImageUploaded: (url: string) => void;
}

export default function ImageUploader({ currentImageUrl, onImageUploaded }: ImageUploaderProps) {
  const { jwt } = useAuth();
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(currentImageUrl || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setPreview(currentImageUrl || null);
  }, [currentImageUrl]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      await handleFileUpload(file);
    }
  };

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      await handleFileUpload(file);
    }
  };

  const handleFileUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file (PNG, JPG, WEBP)');
      return;
    }

    // Set local preview
    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    setIsUploading(true);
    try {
      const ext = file.name.split('.').pop() || 'jpg';
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`;
      
      await uploadImage(fileName, file, jwt);
      
      const publicUrl = `https://pmdpzdyzzhsdrakiwdds.supabase.co/storage/v1/object/public/food-menu/${fileName}`;
      onImageUploaded(publicUrl);
    } catch (error: any) {
      console.error('Upload error:', error);
      alert(error.message || 'Failed to upload image');
      setPreview(currentImageUrl || null);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className={styles.uploaderContainer}>
      <div 
        className={`${styles.dropzone} ${isDragging ? styles.dragging : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleChange} 
          accept="image/png, image/jpeg, image/jpg, image/webp" 
          className={styles.fileInput} 
        />
        
        {preview ? (
          <div className={styles.previewContainer}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={preview} alt="Preview" className={styles.previewImage} />
            {isUploading && (
              <div className={styles.uploadOverlay}>
                <div className={styles.spinner}></div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.placeholder}>
            <FiUploadCloud className={styles.icon} />
            <p>Drag and drop an image, or click to browse</p>
            <span>Supports PNG, JPG, WEBP</span>
          </div>
        )}
      </div>
    </div>
  );
}
