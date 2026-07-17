import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Pencil, Trash2, Heart } from 'lucide-react';
import { ToolItem } from '../types';
import FaviconImg from './FaviconImg';

interface LinkListCardProps {
  item: ToolItem;
  editMode?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  isFavorited?: boolean;
  onToggleFavorite?: () => void;
}

const LinkListCard = ({ item, editMode = false, onEdit, onDelete, isFavorited = false, onToggleFavorite }: LinkListCardProps) => {
  return (
    <div className="relative group flex items-center justify-between px-3 py-2.5 rounded-xl bg-[#00A8FF]/5 border border-[#00A8FF]/15 hover:bg-[#00A8FF]/10 hover:border-[#00A8FF]/30 transition-all flex-grow h-full">
      
      {onToggleFavorite && (
        <button
          onClick={(e) => { e.preventDefault(); onToggleFavorite(); }}
          className={`mr-2 flex-shrink-0 transition-all hover:scale-125 z-10 ${isFavorited ? 'p-1 rounded-full bg-red-500/20 shadow-[0_0_8px_rgba(239,68,68,0.4)]' : 'p-1 rounded-full bg-black/30 border border-white/10'}`}
        >
          <Heart 
            size={isFavorited ? 16 : 14} 
            className={isFavorited ? 'text-red-500 drop-shadow-[0_0_4px_rgba(239,68,68,0.8)]' : 'text-white/50 group-hover:text-red-400'} 
            fill={isFavorited ? 'currentColor' : 'none'}
          />
        </button>
      )}

      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 flex-grow min-w-0" title={item.desc}>
        <FaviconImg url={item.link} name={item.name} size={20} />
        <span className="font-poppins font-medium text-sm text-white group-hover:text-[#00A8FF] transition-colors truncate">{item.name}</span>
        <ExternalLink size={12} className="text-[#00A8FF]/50 group-hover:text-[#00A8FF] flex-shrink-0" />
      </a>
      
      <AnimatePresence>
        {editMode && onEdit && onDelete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex items-center gap-1 ml-3 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <button onClick={(e) => { e.preventDefault(); onEdit(); }} className="p-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/40 transition-colors"><Pencil size={12}/></button>
            <button onClick={(e) => { e.preventDefault(); onDelete(); }} className="p-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/40 transition-colors"><Trash2 size={12}/></button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LinkListCard;
