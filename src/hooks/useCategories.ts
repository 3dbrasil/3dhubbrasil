import { useState, useEffect } from 'react';
import { Category, ToolItem } from '../types';
import defaultCategories from '../data/categories';
import { categoriesApi, itemsApi } from '../lib/api';

const USE_API = import.meta.env.VITE_USE_API === 'true';

export const useCategories = () => {
  const [cats, setCats] = useState<Category[]>([]);
  const [editMode, setEditMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editModalData, setEditModalData] = useState<{ catId: string; itemIdx?: number; item?: ToolItem; isLinkList?: boolean } | null>(null);
  const [isCatModalOpen, setCatModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Load categories
  useEffect(() => {
    if (USE_API) {
      loadFromApi();
    } else {
      loadFromStorage();
    }
  }, []);

  // Save to localStorage (only when not using API)
  useEffect(() => {
    if (!USE_API && cats.length > 0) {
      localStorage.setItem('3dhub-categories', JSON.stringify(cats));
      localStorage.setItem('3dhub-version', '4.0');
    }
  }, [cats, USE_API]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setEditModalOpen(false);
        setCatModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const loadFromStorage = () => {
    const saved = localStorage.getItem('3dhub-categories');
    const version = localStorage.getItem('3dhub-version');
    const currentVersion = '4.0';
    if (saved && version === currentVersion) {
      try {
        setCats(JSON.parse(saved));
      } catch (e) {
        localStorage.removeItem('3dhub-categories');
        localStorage.setItem('3dhub-version', currentVersion);
        setCats(defaultCategories);
      }
    } else {
      localStorage.removeItem('3dhub-categories');
      localStorage.setItem('3dhub-version', currentVersion);
      setCats(defaultCategories);
    }
  };

  const loadFromApi = async () => {
    setIsLoading(true);
    try {
      const data = await categoriesApi.getAll();
      if (data.length > 0) {
        const mapped = data.map((cat: any) => ({
          id: cat.id.toString(),
          name: cat.name,
          icon: cat.icon,
          isLinkList: cat.isLinkList,
          items: (cat.items || []).map((item: any) => ({
            name: item.name,
            link: item.link,
            desc: item.desc,
            type: item.type,
          })),
        }));
        setCats(mapped);
      } else {
        setCats(defaultCategories);
      }
    } catch (error) {
      console.error('Failed to load from API, falling back to localStorage:', error);
      loadFromStorage();
    } finally {
      setIsLoading(false);
    }
  };

  const updateCategory = async (catId: string, changes: Partial<Category>) => {
    const newCats = cats.map(c => c.id === catId ? { ...c, ...changes } : c);
    setCats(newCats);

    if (USE_API) {
      try {
        await categoriesApi.update(Number(catId), {
          name: changes.name,
          isLinkList: changes.isLinkList,
        });
      } catch (error) {
        console.error('Failed to update category:', error);
      }
    }
  };

  const removeCategory = async (catId: string) => {
    if (window.confirm("Remover esta categoria inteira?")) {
      setCats(cats.filter(c => c.id !== catId));

      if (USE_API) {
        try {
          await categoriesApi.delete(Number(catId));
        } catch (error) {
          console.error('Failed to delete category:', error);
        }
      }
    }
  };

  const addCategory = async (catData: Partial<Category>) => {
    if (USE_API) {
      try {
        const newCat = await categoriesApi.create({
          name: catData.name || 'Nova Categoria',
          icon: 'fa-cube',
          isLinkList: catData.isLinkList,
        });
        const mapped = {
          id: newCat.id.toString(),
          name: newCat.name,
          icon: newCat.icon,
          isLinkList: newCat.isLinkList,
          items: [],
        };
        setCats([...cats, mapped]);
      } catch (error) {
        console.error('Failed to create category:', error);
      }
    } else {
      const newCat: Category = {
        id: Date.now().toString(36),
        name: catData.name || 'Nova Categoria',
        icon: 'fa-cube',
        isLinkList: catData.isLinkList,
        items: []
      };
      setCats([...cats, newCat]);
    }
  };

  const handleSaveItem = async (item: ToolItem) => {
    if (!editModalData) return;
    const { catId, itemIdx } = editModalData;

    if (USE_API) {
      try {
        if (itemIdx !== undefined) {
          const cat = cats.find(c => c.id === catId);
          if (cat) {
            // Update existing item
            const existingItem = cat.items[itemIdx];
            // Note: we'd need the item's DB id for this to work properly
          }
        } else {
          // Create new item
          await itemsApi.create({
            categoryId: Number(catId),
            name: item.name,
            link: item.link,
            desc: item.desc,
            type: item.type,
          });
        }
        await loadFromApi();
      } catch (error) {
        console.error('Failed to save item:', error);
      }
    } else {
      setCats(cats.map(c => {
        if (c.id === catId) {
          const newItems = [...c.items];
          if (itemIdx !== undefined) {
            newItems[itemIdx] = item;
          } else {
            newItems.push(item);
          }
          return { ...c, items: newItems };
        }
        return c;
      }));
    }
  };

  const handleRemoveItem = async (catId: string, itemIdx: number) => {
    if (window.confirm("Remover este item?")) {
      if (USE_API) {
        // Note: we'd need the item's DB id for this to work
        await loadFromApi();
      } else {
        setCats(cats.map(c => {
          if (c.id === catId) {
            const newItems = [...c.items];
            newItems.splice(itemIdx, 1);
            return { ...c, items: newItems };
          }
          return c;
        }));
      }
    }
  };

  const isSearching = searchQuery.trim().length > 0;
  let searchResults: ToolItem[] = [];
  
  if (isSearching) {
    const query = searchQuery.toLowerCase();
    cats.forEach(cat => {
      cat.items.forEach(item => {
        if (item.name.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query)) {
          searchResults.push({
            ...item,
            categoryName: cat.name,
            isLinkList: cat.isLinkList
          });
        }
      });
    });
  }

  const totalItems = cats.reduce((acc, cat) => acc + cat.items.length, 0);

  return {
    cats,
    setCats,
    editMode,
    setEditMode,
    searchQuery,
    setSearchQuery,
    isEditModalOpen,
    setEditModalOpen,
    editModalData,
    setEditModalData,
    isCatModalOpen,
    setCatModalOpen,
    updateCategory,
    removeCategory,
    addCategory,
    handleSaveItem,
    handleRemoveItem,
    isSearching,
    searchResults,
    totalItems,
    isLoading,
    useApi: USE_API,
  };
};
