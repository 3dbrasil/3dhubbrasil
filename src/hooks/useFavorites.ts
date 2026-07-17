import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('3dhub-favorites');
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        setFavorites([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('3dhub-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (itemKey: string) => {
    setFavorites(prev => 
      prev.includes(itemKey) 
        ? prev.filter(k => k !== itemKey) 
        : [itemKey, ...prev]
    );
  };

  const isFavorite = (itemKey: string) => favorites.includes(itemKey);

  const getItemKey = (categoryName: string, itemName: string) => `${categoryName}::${itemName}`;

  return { favorites, toggleFavorite, isFavorite, getItemKey };
};
