import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Category } from '../types';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (cat: Partial<Category>) => void;
}

const CategoryModal = ({ isOpen, onClose, onSave }: CategoryModalProps) => {
  const [formData, setFormData] = useState({ name: '', isLinkList: false });

  useEffect(() => {
    if (isOpen) setFormData({ name: '', isLinkList: false });
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name) return;
    onSave(formData);
    onClose();
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            className="bg-[#0F1C2E] border border-white/10 rounded-2xl p-6 max-w-md w-full shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-poppins font-bold text-white">Nova Categoria</h3>
              <button type="button" onClick={onClose} className="text-white/50 hover:text-white transition-colors"><X size={20}/></button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs text-white/50 mb-1">Nome da Categoria *</label>
                <input autoFocus required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-white/30 focus:outline-none focus:border-[#00A8FF]" placeholder="Ex: 🎨 Texturas" />
              </div>
              
              <div>
                <label className="flex items-center gap-2 text-sm text-white cursor-pointer mt-2">
                  <input type="checkbox" checked={formData.isLinkList} onChange={e => setFormData({...formData, isLinkList: e.target.checked})} className="rounded bg-white/10 border-white/20 text-[#00A8FF] focus:ring-[#00A8FF]" />
                  Layout compacto (Lista de Links)
                </label>
              </div>
              
              <div className="mt-6 flex justify-end gap-3">
                <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">Cancelar</button>
                <button type="submit" className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#00A8FF] text-white hover:bg-[#0077BE] transition-colors">Criar</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default CategoryModal;
