import { useState } from 'react';
import { Box, Settings, Check, Plus } from 'lucide-react';
import { useCategories } from './hooks/useCategories';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import defaultCategories from './data/categories';
import ScrollProgressBar from './components/ScrollProgressBar';
import Header from './components/Header';
import FloatingNav from './components/FloatingNav';
import ApoioBar from './components/ApoioBar';
import NewsTicker from './components/NewsTicker';
import CotacaoBar from './components/CotacaoBar';
import HeroSection from './components/HeroSection';
import ToolsNav from './components/ToolsNav';
import VendedorBar from './components/VendedorBar';
import CalculatorTool from './components/CalculatorTool';
import Manutencao from './pages/Manutencao';
import Calibracao from './pages/Calibracao';
import Marketing from './pages/Marketing';
import Filamentos from './pages/Filamentos';
import FavoritesSection from './components/FavoritesSection';
import CategorySection from './components/CategorySection';
import ToolCard from './components/ToolCard';
import LinkListCard from './components/LinkListCard';
import EditModal from './components/EditModal';
import CategoryModal from './components/CategoryModal';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  const [activeTool, setActiveTool] = useState<string | null>(null);

  const {
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
    totalItems
  } = useCategories();

  const { theme, toggleTheme } = useTheme();
  const { favorites, toggleFavorite, isFavorite, getItemKey } = useFavorites();

  const getFavoritedItems = () => {
    const items: any[] = [];
    cats.forEach(cat => {
      cat.items.forEach(item => {
        const key = `${cat.name}::${item.name}`;
        if (favorites.includes(key)) {
          items.push({ ...item, categoryName: cat.name, isLinkList: cat.isLinkList });
        }
      });
    });
    return items;
  };

  const favoritedItems = getFavoritedItems();

  const onToggleFavorite = (key: string) => {
    toggleFavorite(key);
  };

  return (
    <div className="min-h-screen w-full bg-background text-white selection:bg-[#00A8FF]/30 font-sans">
      <ScrollProgressBar />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} theme={theme} toggleTheme={toggleTheme} />
      <ApoioBar />
      <FloatingNav cats={cats} onReorder={setCats} />

      <div className="h-[6.5rem]" />

      {!isSearching && <NewsTicker />}
      
      {!isSearching && <HeroSection totalItems={totalItems} />}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {isSearching ? (
          <div className="min-h-[50vh] pt-10">
            <h2 className="text-2xl font-poppins font-bold mb-8">
              Resultados para <span className="text-[#00A8FF]">"{searchQuery}"</span>
              <span className="text-sm font-normal text-muted-foreground ml-4">{searchResults.length} encontrados</span>
            </h2>
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {searchResults.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -top-3 left-4 z-20 bg-[#060D18] px-2 text-xs font-semibold text-[#00A8FF] border border-[#00A8FF]/30 rounded-full">
                      {item.categoryName?.replace(/[^a-zA-ZÀ-ÿ\s]/g, '').trim()}
                    </div>
                    {item.isLinkList ? (
                      <LinkListCard item={item} editMode={false} />
                    ) : (
                      <ToolCard item={item} editMode={false} />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Box size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                <p className="text-xl text-muted-foreground">Nenhuma ferramenta encontrada.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-[#00A8FF] hover:underline"
                >
                  Limpar busca
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <ToolsNav activeTool={activeTool} setActiveTool={setActiveTool} />

            <VendedorBar />

            {activeTool === 'calculadora' && <CalculatorTool />}
            {activeTool === 'manutencao' && <Manutencao />}
            {activeTool === 'calibracao' && <Calibracao />}
            {activeTool === 'marketing' && <Marketing />}
            {activeTool === 'filamentos' && <Filamentos />}

            <CotacaoBar />

            {favoritedItems.length > 0 && (
              <FavoritesSection
                items={favoritedItems}
                onToggleFavorite={onToggleFavorite}
                isFavorite={isFavorite}
              />
            )}

            {cats.map((category, index) => (
              <CategorySection 
                key={category.id} 
                category={category} 
                index={index} 
                editMode={editMode}
                onUpdateCategory={(changes) => updateCategory(category.id, changes)}
                onRemoveCategory={() => removeCategory(category.id)}
                onAddItem={() => {
                  setEditModalData({ catId: category.id, isLinkList: category.isLinkList });
                  setEditModalOpen(true);
                }}
                onEditItem={(idx, item) => {
                  setEditModalData({ catId: category.id, itemIdx: idx, item, isLinkList: category.isLinkList });
                  setEditModalOpen(true);
                }}
                onRemoveItem={(idx) => handleRemoveItem(category.id, idx)}
                onToggleFavorite={onToggleFavorite}
                isFavorite={isFavorite}
              />
            ))}

            {editMode && (
              <div className="py-12 flex flex-col items-center gap-6">
                <button 
                  onClick={() => setCatModalOpen(true)}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-semibold"
                >
                  <Plus size={20} /> Nova Categoria
                </button>

                <button 
                  onClick={() => {
                    if(window.confirm('Tem certeza que deseja restaurar os padrões? Todas as alterações serão perdidas.')) {
                      localStorage.removeItem('3dhub-categories');
                      setCats(defaultCategories);
                    }
                  }}
                  className="text-xs text-white/30 hover:text-red-400 transition-colors underline"
                >
                  Restaurar padrões
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />

      <button
        onClick={() => setEditMode(!editMode)}
        className={`fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-semibold text-sm transition-all shadow-2xl ${
          editMode 
            ? 'bg-amber-500/10 border border-amber-400/30 text-amber-300 hover:bg-amber-500/20' 
            : 'bg-[#0F1C2E] border border-white/10 text-white/50 hover:bg-white/10 hover:text-white'
        }`}
      >
        {editMode ? <Check size={18} /> : <Settings size={18} />}
        {editMode ? 'Editando' : 'Editar'}
      </button>

      <EditModal 
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={handleSaveItem}
        initialData={editModalData?.item}
        isLinkList={editModalData?.isLinkList}
      />

      <CategoryModal
        isOpen={isCatModalOpen}
        onClose={() => setCatModalOpen(false)}
        onSave={addCategory}
      />
    </div>
  );
}

export default App;
