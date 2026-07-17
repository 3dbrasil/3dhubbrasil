import { motion } from 'framer-motion';
import { Trash2, Plus } from 'lucide-react';
import { Category, ToolItem } from '../types';
import ToolCard from './ToolCard';
import LinkListCard from './LinkListCard';

interface CategorySectionProps {
  category: Category;
  index: number;
  editMode: boolean;
  onUpdateCategory: (changes: Partial<Category>) => void;
  onRemoveCategory: () => void;
  onAddItem: () => void;
  onEditItem: (idx: number, item: ToolItem) => void;
  onRemoveItem: (idx: number) => void;
  onToggleFavorite: (key: string) => void;
  isFavorite: (key: string) => boolean;
}

const CategorySection = ({ 
  category, 
  index, 
  editMode,
  onUpdateCategory,
  onRemoveCategory,
  onAddItem,
  onEditItem,
  onRemoveItem,
  onToggleFavorite,
  isFavorite
}: CategorySectionProps) => {
  const formattedIndex = (index + 1).toString().padStart(2, '0');

  return (
    <motion.section 
      id={category.id}
      className="py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center flex-wrap gap-3">
          <span className="text-[#00A8FF]/30 text-xs font-mono">[{formattedIndex}]</span>
          
          {editMode ? (
            <input 
              value={category.name}
              onChange={(e) => onUpdateCategory({ name: e.target.value })}
              className="bg-transparent border-b border-[#00A8FF]/50 text-2xl md:text-3xl font-poppins font-bold text-white focus:outline-none w-auto min-w-[200px]"
            />
          ) : (
            <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white flex items-center gap-3">
              {category.name}
            </h2>
          )}
          
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#00A8FF]/10 text-[#00A8FF]/60 whitespace-nowrap font-mono font-medium">
            [{category.items.length}]
          </span>

          <div className="section-divider ml-2 flex-grow hidden md:block"></div>

          {category.id === 'github' && !editMode && (
            <div className="w-full mt-2">
              <div className="text-[10px] text-white/30 bg-white/5 border border-white/10 rounded-lg px-3 py-2 leading-relaxed">
                <span className="text-[#00A8FF] font-bold">Como instalar:</span>{' '}
                Clique no botão verde <b>Code</b> → <b>Download ZIP</b> → Extraia → Clique com botão direito dentro da pasta → <b>Abrir no CMD</b> → Digite <code className="text-[#00A8FF] bg-[#00A8FF]/10 px-1 rounded">npm run dev</code> → Copie o host gerado e cole no navegador.
              </div>
            </div>
          )}

          {editMode && (
            <div className="flex items-center gap-2 mt-2 w-full md:w-auto md:mt-0">
              <button onClick={onRemoveCategory} className="p-1.5 bg-red-500/20 text-red-300 rounded hover:bg-red-500/40 transition-colors" title="Remover Categoria"><Trash2 size={16}/></button>
              <button onClick={onAddItem} className="flex items-center gap-1 px-3 py-1.5 bg-green-500/20 text-green-400 rounded hover:bg-green-500/40 text-xs font-bold uppercase tracking-wider transition-colors"><Plus size={14}/> Adicionar Item</button>
              <label className="flex items-center gap-2 text-xs text-white/50 cursor-pointer ml-2">
                <input type="checkbox" checked={!!category.isLinkList} onChange={(e) => onUpdateCategory({ isLinkList: e.target.checked })} className="rounded bg-white/10 border-white/20 text-[#00A8FF] focus:ring-[#00A8FF]" />
                Lista de links
              </label>
            </div>
          )}
        </div>
      </div>
      
      {category.isLinkList ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {[...category.items].sort((a, b) => {
            const aFav = isFavorite(`${category.name}::${a.name}`) ? 0 : 1;
            const bFav = isFavorite(`${category.name}::${b.name}`) ? 0 : 1;
            if (aFav !== bFav) return aFav - bFav;
            const aFree = a.type === 'FREE' ? 0 : 1;
            const bFree = b.type === 'FREE' ? 0 : 1;
            return aFree - bFree;
          }).map((item, i) => {
            const origIdx = category.items.indexOf(item);
            const key = `${category.name}::${item.name}`;
            return (
              <LinkListCard 
                key={i}
                item={item} 
                editMode={editMode} 
                onEdit={() => onEditItem(origIdx, item)} 
                onDelete={() => onRemoveItem(origIdx)}
                isFavorited={isFavorite(key)}
                onToggleFavorite={() => onToggleFavorite(key)}
              />
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[...category.items].sort((a, b) => {
            const aFav = isFavorite(`${category.name}::${a.name}`) ? 0 : 1;
            const bFav = isFavorite(`${category.name}::${b.name}`) ? 0 : 1;
            if (aFav !== bFav) return aFav - bFav;
            const aFree = a.type === 'FREE' ? 0 : 1;
            const bFree = b.type === 'FREE' ? 0 : 1;
            return aFree - bFree;
          }).map((item, i) => {
            const origIdx = category.items.indexOf(item);
            const key = `${category.name}::${item.name}`;
            return (
              <ToolCard 
                key={i} 
                item={item} 
                editMode={editMode}
                onEdit={() => onEditItem(origIdx, item)} 
                onDelete={() => onRemoveItem(origIdx)}
                isFavorited={isFavorite(key)}
                onToggleFavorite={() => onToggleFavorite(key)}
              />
            );
          })}
        </div>
      )}
    </motion.section>
  );
};

export default CategorySection;
