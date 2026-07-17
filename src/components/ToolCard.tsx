import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Pencil, Trash2, Heart } from 'lucide-react';
import { ToolItem } from '../types';

interface ToolCardProps {
  item: ToolItem;
  editMode?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
  isFavorited?: boolean;
  onToggleFavorite?: () => void;
}

const ToolCard = ({ item, editMode = false, onEdit, onDelete, isFavorited = false, onToggleFavorite }: ToolCardProps) => {
  return (
    <div className="relative group flex flex-col h-full glass-card rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[#00A8FF]/30 hover:shadow-[0_0_0_1px_rgba(0,168,255,0.1),0_8px_32px_rgba(0,0,0,0.4)]">
      
      <AnimatePresence>
        {editMode && onEdit && onDelete && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-2 right-2 z-20 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <button onClick={(e) => { e.preventDefault(); onEdit(); }} className="p-1.5 bg-blue-500/20 text-blue-300 rounded hover:bg-blue-500/40 transition-colors"><Pencil size={14}/></button>
            <button onClick={(e) => { e.preventDefault(); onDelete(); }} className="p-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/40 transition-colors"><Trash2 size={14}/></button>
          </motion.div>
        )}
      </AnimatePresence>

      {onToggleFavorite && (
        <button
          onClick={(e) => { e.preventDefault(); onToggleFavorite(); }}
          className={`absolute top-3 left-3 z-20 transition-all hover:scale-125 ${isFavorited ? 'p-1.5 rounded-full bg-red-500/20 shadow-[0_0_12px_rgba(239,68,68,0.5)]' : 'p-1.5 rounded-full bg-black/30 backdrop-blur-sm border border-white/10'}`}
        >
          <Heart 
            size={isFavorited ? 22 : 18} 
            className={isFavorited ? 'text-red-500 drop-shadow-[0_0_6px_rgba(239,68,68,0.8)]' : 'text-white/50 group-hover:text-red-400'} 
            fill={isFavorited ? 'currentColor' : 'none'}
          />
        </button>
      )}

      <div className="relative w-full h-36 overflow-hidden bg-[#0a1525] rounded-t-xl">
        <img src={`${import.meta.env.BASE_URL}toolimages/${item.name.replace(/[^\w\-]/g, '_')}.jpg`} alt={item.name} loading="lazy" decoding="async" onError={e => { (e.target as HTMLImageElement).style.display = 'none' }} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C2E] via-transparent to-transparent" />
        {item.type && !item.isLinkList && (
          <span className={`absolute top-2 right-2 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider
            ${item.type === 'FREE' ? 'bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm' : 
              'bg-amber-500/20 text-amber-400 border border-amber-500/30 backdrop-blur-sm'}`}>
            {item.type}
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow relative z-10">
        <h3 className="font-poppins font-bold text-base text-white group-hover:text-[#00A8FF] transition-colors leading-tight mb-1 text-center">{item.name}</h3>
        
        <p className="text-xs text-muted-foreground flex-grow mb-4 text-center">
          {item.desc}
        </p>
        
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-[#00A8FF] text-xs font-semibold mt-auto opacity-70 group-hover:opacity-100 transition-opacity w-max mx-auto">
          Acessar <ExternalLink size={14} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ToolCard;
