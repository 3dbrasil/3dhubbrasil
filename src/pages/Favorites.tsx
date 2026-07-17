import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Heart, Box, ExternalLink } from 'lucide-react';
import { ToolItem } from '../types';
import FaviconImg from '../components/FaviconImg';

const Favorites = () => {
  const [favorites, setFavorites] = useState<ToolItem[]>([]);

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

  const removeFavorite = (index: number) => {
    const newFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(newFavorites);
    localStorage.setItem('3dhub-favorites', JSON.stringify(newFavorites));
  };

  return (
    <div className="min-h-screen w-full bg-background text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#00A8FF] hover:underline mb-8">
          <ArrowLeft size={16} /> Voltar ao catálogo
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <Heart size={28} className="text-red-500" fill="currentColor" />
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white">
            Meus <span className="neon-text">Favoritos</span>
          </h1>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-20">
            <Box size={48} className="mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-xl text-muted-foreground">Nenhum favorito ainda.</p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Visite o catálogo e adicione ferramentas aos favoritos.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {favorites.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-[#00A8FF]/30 transition-all">
                <FaviconImg url={item.link} name={item.name} size={32} />
                <div className="flex-grow min-w-0">
                  <h3 className="font-poppins font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-muted-foreground truncate">{item.desc}</p>
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#00A8FF] hover:underline flex-shrink-0">
                  <ExternalLink size={16} />
                </a>
                <button
                  onClick={() => removeFavorite(i)}
                  className="text-red-400 hover:text-red-300 transition-colors flex-shrink-0"
                >
                  <Heart size={16} fill="currentColor" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
