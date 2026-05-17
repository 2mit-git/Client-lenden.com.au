import React from 'react';
import { AuthProvider } from '../../context/AuthContext';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Header />
      <main style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: 'var(--cream-surface)' }}>
        {children}
      </main>
      <Footer />
    </AuthProvider>
  );
}
