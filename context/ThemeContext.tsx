"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

// export type ThemeKey = 'default' | 'summer' | 'winter' | 'christmas' | 'eid' | 'halloween' | 'newyear';
export type ThemeKey = 'default' | 'summer' | 'winter' | 'christmas' | 'eid';

export interface ThemeDefinition {
  name: string;
  emoji: string;
  colors: {
    '--epicurean-maroon': string;
    '--cream-surface': string;
    '--golden-accent': string;
    '--text-primary': string;
    '--text-secondary': string;
    '--border-divider': string;
    '--surface-dim': string;
    '--white': string;
    '--theme-glow': string;
    '--theme-gradient-from': string;
    '--theme-gradient-to': string;
    '--footer-bg': string;
    '--surface-card': string;
    '--text-on-card': string;
    '--text-on-dark': string;
  };
}

export const themes: Record<ThemeKey, ThemeDefinition> = {
  default: {
    name: 'Lenden Classic',
    emoji: '🍽️',
    colors: {
      '--epicurean-maroon': '#601A24',
      '--cream-surface': '#FDF9EF',
      '--golden-accent': '#C49B3B',
      '--text-primary': '#2D1216',
      '--text-secondary': '#6B5E5F',
      '--border-divider': '#E8E2D5',
      '--surface-dim': '#F4EFE6',
      '--white': '#ffffff',
      '--theme-glow': 'rgba(196, 155, 59, 0.3)',
      '--theme-gradient-from': '#FDF9EF',
      '--theme-gradient-to': '#F4EFE6',
      '--footer-bg': '#4A0F18',
      '--surface-card': '#ffffff',
      '--text-on-card': '#2D1216',
      '--text-on-dark': '#ffffff',
    }
  },
  summer: {
    name: 'Summer Blaze',
    emoji: '☀️',
    colors: {
      '--epicurean-maroon': '#690404ff',
      '--cream-surface': '#FFF8E7',
      '--golden-accent': '#FF9F0A',
      '--text-primary': '#1A0A00',
      '--text-secondary': '#7A3B00',
      '--border-divider': '#FFD080',
      '--surface-dim': '#FFF0C0',
      '--white': '#ffffff',
      '--theme-glow': 'rgba(255, 159, 10, 0.45)',
      '--theme-gradient-from': '#FFF8E7',
      '--theme-gradient-to': '#FFE8A0',
      '--footer-bg': '#7A2000',
      '--surface-card': '#FFF8E7',
      '--text-on-card': '#1A0A00',
      '--text-on-dark': '#ffffff',
    }
  },
  winter: {
    name: 'Arctic Frost',
    emoji: '❄️',
    colors: {
      '--epicurean-maroon': '#0A3A6B',
      '--cream-surface': '#E8F4FD',
      '--golden-accent': '#4CC9F0',
      '--text-primary': '#071B3A',
      '--text-secondary': '#2B6CB0',
      '--border-divider': '#A8D4F0',
      '--surface-dim': '#C8E8F8',
      '--white': '#ffffff',
      '--theme-glow': 'rgba(76, 201, 240, 0.4)',
      '--theme-gradient-from': '#E8F4FD',
      '--theme-gradient-to': '#C8E8F8',
      '--footer-bg': '#051228',
      '--surface-card': '#E8F4FD',
      '--text-on-card': '#071B3A',
      '--text-on-dark': '#ffffff',
    }
  },
  christmas: {
    name: 'Christmas Eve',
    emoji: '🎄',
    colors: {
      '--epicurean-maroon': '#B80020',
      '--cream-surface': '#FFF5E0',
      '--golden-accent': '#FFD700',
      '--text-primary': '#1A0A00',
      '--text-secondary': '#8B0000',
      '--border-divider': '#F5C518',
      '--surface-dim': '#FFE8B0',
      '--white': '#ffffff',
      '--theme-glow': 'rgba(255, 215, 0, 0.45)',
      '--theme-gradient-from': '#FFF5E0',
      '--theme-gradient-to': '#FFE8B0',
      '--footer-bg': '#6B0012',
      '--surface-card': '#FFF5E0',
      '--text-on-card': '#1A0A00',
      '--text-on-dark': '#ffffff',
    }
  },
  eid: {
    name: 'Eid Mubarak',
    emoji: '🌙',
    colors: {
      '--epicurean-maroon': '#00843D',
      '--cream-surface': '#F0FBF4',
      '--golden-accent': '#C9A84C',
      '--text-primary': '#001C0A',
      '--text-secondary': '#1A5C30',
      '--border-divider': '#A8DFC0',
      '--surface-dim': '#C8F0DA',
      '--white': '#ffffff',
      '--theme-glow': 'rgba(201, 168, 76, 0.45)',
      '--theme-gradient-from': '#F0FBF4',
      '--theme-gradient-to': '#C8F0DA',
      '--footer-bg': '#003D1C',
      '--surface-card': '#F0FBF4',
      '--text-on-card': '#001C0A',
      '--text-on-dark': '#ffffff',
    }
  }
  // halloween: {
  //   name: 'Halloween Night',
  //   emoji: '🎃',
  //   colors: {
  //     '--epicurean-maroon': '#FF6B00',
  //     '--cream-surface': '#120022',
  //     '--golden-accent': '#FF8C00',
  //     '--text-primary': '#FFD580',
  //     '--text-secondary': '#D4A0FF',
  //     '--border-divider': '#3D006B',
  //     '--surface-dim': '#1E003A',
  //     '--white': '#F0D0FF',
  //     '--theme-glow': 'rgba(255, 107, 0, 0.5)',
  //     '--theme-gradient-from': '#120022',
  //     '--theme-gradient-to': '#1E003A',
  //     '--footer-bg': '#0A0015',
  //     '--surface-card': '#1E003A',
  //     '--text-on-card': '#F0D0FF',
  //     '--text-on-dark': '#FFD580',
  //   }
  // },
  // newyear: {
  //   name: 'New Year Gala',
  //   emoji: '🎆',
  //   colors: {
  //     '--epicurean-maroon': '#C9A84C',
  //     '--cream-surface': '#0D0D12',
  //     '--golden-accent': '#FFD700',
  //     '--text-primary': '#F5F0E0',
  //     '--text-secondary': '#C0B090',
  //     '--border-divider': '#2A2620',
  //     '--surface-dim': '#1A1810',
  //     '--white': '#F5F0E0',
  //     '--theme-glow': 'rgba(255, 215, 0, 0.5)',
  //     '--theme-gradient-from': '#0D0D12',
  //     '--theme-gradient-to': '#1A1810',
  //     '--footer-bg': '#06060A',
  //     '--surface-card': '#1A1810',
  //     '--text-on-card': '#F5F0E0',
  //     '--text-on-dark': '#F5F0E0',
  //   }
  // }
};

interface ThemeContextType {
  activeTheme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('lenden-theme') as ThemeKey;
    if (savedTheme && themes[savedTheme]) {
      setActiveTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const theme = themes[activeTheme];
    if (theme) {
      Object.entries(theme.colors).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
      localStorage.setItem('lenden-theme', activeTheme);
    }
  }, [activeTheme, mounted]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setTheme: setActiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
