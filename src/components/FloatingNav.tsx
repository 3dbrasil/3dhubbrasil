import { useState, useEffect, useRef } from 'react';
import { Category } from '../types';

interface FloatingNavProps {
  cats: Category[];
  onReorder: (newCats: Category[]) => void;
}

const FloatingNav = ({ cats, onReorder }: FloatingNavProps) => {
  const [visible, setVisible] = useState(false);
  const [activeCatId, setActiveCatId] = useState('');
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [overIdx, setOverIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!cats.length) return;
    const observers: IntersectionObserver[] = [];
    cats.forEach(cat => {
      const el = document.getElementById(cat.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveCatId(cat.id); },
        { rootMargin: '-80px 0px -40% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [cats]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleDragStart = (e: React.DragEvent, idx: number) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', String(idx));
    setDragIdx(idx);
  };

  const handleDragOver = (e: React.DragEvent, idx: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setOverIdx(idx);
  };

  const handleDrop = (e: React.DragEvent, dropIdx: number) => {
    e.preventDefault();
    const fromIdx = dragIdx;
    if (fromIdx === null || fromIdx === dropIdx) return;
    const newCats = [...cats];
    const [moved] = newCats.splice(fromIdx, 1);
    newCats.splice(dropIdx, 0, moved);
    onReorder(newCats);
    setDragIdx(null);
    setOverIdx(null);
  };

  const handleDragEnd = () => {
    setDragIdx(null);
    setOverIdx(null);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-[3.6rem] left-0 right-0 z-30 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto bg-[#07101F]/95 backdrop-blur-xl border border-white/[0.07] rounded-2xl px-3 py-2 shadow-[0_8px_40px_rgba(0,0,0,0.7)]">
        <div
          ref={scrollRef}
          className="flex items-center gap-1 overflow-x-auto no-scrollbar"
          style={{ maxWidth: 'calc(100vw - 3rem)' }}
        >
          {cats.map((cat, idx) => {
            const parts = cat.name.split(' ');
            const displayName = parts.length > 1 ? parts.slice(1).join(' ') : cat.name;
            const isActive = cat.id === activeCatId;
            const isDragging = dragIdx === idx;
            const isOver = overIdx === idx && dragIdx !== null && dragIdx !== idx;
            return (
              <div
                key={cat.id}
                draggable
                onDragStart={(e) => handleDragStart(e, idx)}
                onDragOver={(e) => handleDragOver(e, idx)}
                onDrop={(e) => handleDrop(e, idx)}
                onDragEnd={handleDragEnd}
                className={`flex-shrink-0 select-none transition-all ${isDragging ? 'opacity-30 scale-95' : ''} ${isOver ? 'scale-110' : ''}`}
                style={{ cursor: 'grab' }}
              >
                <button
                  onPointerDown={e => e.stopPropagation()}
                  onClick={() => scrollTo(cat.id)}
                  className={`block px-3 py-1.5 rounded-xl text-[11px] font-semibold transition-all whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#00A8FF] text-white border-[#00A8FF]/40 shadow-[0_0_14px_rgba(0,168,255,0.45)]'
                      : 'text-white/45 border-transparent hover:text-white hover:bg-white/[0.07] hover:border-white/10'
                  }`}
                >
                  {displayName}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
