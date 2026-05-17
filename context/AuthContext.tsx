"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { supabaseLogin } from '../lib/supabaseClient';

interface AuthContextType {
  jwt: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [jwt, setJwt] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    const token = sessionStorage.getItem('admin-jwt');
    if (token) {
      setJwt(token);
    }
    setIsMounted(true);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const data = await supabaseLogin(email, password);
      if (data.access_token) {
        setJwt(data.access_token);
        sessionStorage.setItem('admin-jwt', data.access_token);
      } else {
        throw new Error('No token returned');
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setJwt(null);
    sessionStorage.removeItem('admin-jwt');
  };

  const isAuthenticated = !!jwt;

  // Don't render children until we've checked session storage to avoid hydration mismatch and login flash
  if (!isMounted) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ jwt, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
