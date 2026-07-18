import { Heart, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

const ApoioBar = () => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="flex items-center justify-center gap-3 px-4 py-1.5 bg-gradient-to-r from-amber-500/20 via-orange-500/15 to-amber-500/20">
      <Heart size={14} className="text-amber-400 flex-shrink-0" fill="currentColor" />
      <span className="text-xs md:text-sm text-white/80">
        Gostou do projeto? Quer apoiar?{' '}
        <a
          href="https://orcaslicerpro.space-z.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 font-semibold hover:text-amber-300 underline underline-offset-2"
        >
          Conheça nosso guia OrcaSlicer
        </a>
      </span>
      <ArrowRight size={12} className="text-amber-400/60 flex-shrink-0" />
      <button
        onClick={() => setShow(false)}
        className="ml-1 p-1 rounded-full hover:bg-white/10 text-white/40 hover:text-white/70 transition-colors flex-shrink-0"
      >
        <X size={12} />
      </button>
    </div>
  );
};

export default ApoioBar;
