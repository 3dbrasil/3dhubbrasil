import { useState, useCallback } from 'react';
import { Product } from '../types/products';

const STORAGE_KEY = '3dhub-products';
const ADMIN_KEY = '3dhub-admin-pass';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const [adminPass, setAdminPass] = useState(() => localStorage.getItem(ADMIN_KEY) || '');
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('3dhub-admin-authed') === 'true';
  });

  const save = (items: Product[]) => {
    setProducts(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const login = (pass: string) => {
    if (pass === adminPass || (adminPass === '' && pass === 'admin')) {
      setIsAdmin(true);
      localStorage.setItem('3dhub-admin-authed', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    localStorage.removeItem('3dhub-admin-authed');
  };

  const setAdminPassword = (pass: string) => {
    setAdminPass(pass);
    localStorage.setItem(ADMIN_KEY, pass);
  };

  const addProduct = useCallback((p: Omit<Product, 'id' | 'lastUpdated'>) => {
    const newProduct: Product = {
      ...p,
      id: crypto.randomUUID(),
      lastUpdated: new Date().toISOString(),
    };
    setProducts(prev => {
      const next = [...prev, newProduct];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const updateProduct = useCallback((id: string, changes: Partial<Product>) => {
    setProducts(prev => {
      const next = prev.map(p =>
        p.id === id ? { ...p, ...changes, lastUpdated: new Date().toISOString() } : p
      );
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const removeProduct = useCallback((id: string) => {
    setProducts(prev => {
      const next = prev.filter(p => p.id !== id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const getGroupedProducts = useCallback(() => {
    const groups: Record<string, Product[]> = {};
    products.forEach(p => {
      if (!groups[p.filamentType]) groups[p.filamentType] = [];
      groups[p.filamentType].push(p);
    });
    Object.keys(groups).forEach(k => {
      groups[k].sort((a, b) => a.price - b.price);
    });
    return groups;
  }, [products]);

  return {
    products,
    isAdmin,
    adminPass,
    login,
    logout,
    setAdminPassword,
    addProduct,
    updateProduct,
    removeProduct,
    getGroupedProducts,
  };
};
