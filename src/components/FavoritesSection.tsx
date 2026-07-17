import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { ToolItem } from '../types';
import ToolCard from './ToolCard';
import LinkListCard from './LinkListCard';

interface FavoritesSectionProps {
  items: ToolItem[];
  onToggleFavorite: (key: string) => void;
  isFavorite: (key: string) => boolean;
}

const FavoritesSection = ({ items, onToggleFavorite, isFavorite }: FavoritesSectionProps) => {
  if (items.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2 rounded-xl bg-red-500/15 border border-red-500/25">
          <Heart size={20} className="text-red-500" fill="currentColor" />
        </div>
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white">Favoritos</h2>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 font-mono">
          [{items.length}]
        </span>
        <div className="section-divider flex-grow hidden md:block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((item, i) => {
          const key = `${item.categoryName}::${item.name}`;
          return (
            <div key={i} className="relative">
              <div className="absolute -top-3 left-4 z-20 bg-[#060D18] px-2 text-xs font-semibold text-red-400 border border-red-500/30 rounded-full">
                {item.categoryName?.replace(/[^a-zA-ZÀ-ÿ\s]/g, '').trim()}
              </div>
              {item.isLinkList ? (
                <LinkListCard
                  item={item}
                  editMode={false}
                  isFavorited={true}
                  onToggleFavorite={() => onToggleFavorite(key)}
                />
              ) : (
                <ToolCard
                  item={item}
                  editMode={false}
                  isFavorited={true}
                  onToggleFavorite={() => onToggleFavorite(key)}
                />
              )}
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default FavoritesSection;
