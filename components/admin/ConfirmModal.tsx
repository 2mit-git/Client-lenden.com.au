"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FiAlertTriangle, FiX } from 'react-icons/fi';
import styles from './ConfirmModal.module.css';

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  isLoading?: boolean;
}

const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 300 } },
};

export default function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  isLoading = false,
}: ConfirmModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
            onClick={isLoading ? undefined : onCancel}
          />
          <motion.div
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button 
              className={styles.closeButton} 
              onClick={onCancel}
              disabled={isLoading}
            >
              <FiX />
            </button>
            
            <div className={styles.content}>
              <div className={styles.iconContainer}>
                <FiAlertTriangle className={styles.icon} />
              </div>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.message}>{message}</p>
            </div>
            
            <div className={styles.actions}>
              <button 
                className={styles.cancelButton} 
                onClick={onCancel}
                disabled={isLoading}
              >
                {cancelText}
              </button>
              <button 
                className={styles.confirmButton} 
                onClick={onConfirm}
                disabled={isLoading}
              >
                {isLoading ? 'Processing...' : confirmText}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
