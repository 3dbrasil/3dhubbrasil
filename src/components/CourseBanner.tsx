import { ArrowRight, Play, Heart } from 'lucide-react';

const CourseBanner = () => {
  return (
    <div className="max-w-7xl mx-auto mb-4 mt-8">
      <a 
        href="https://orcaslicerpro.space-z.ai/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-4 p-4 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/10 to-orange-500/5 hover:border-amber-400/40 transition-all shadow-[0_0_20px_rgba(245,158,11,0.05)]"
      >
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
          <Play size={20} className="ml-1" fill="currentColor" />
        </div>
        <div className="flex-grow min-w-0">
          <div className="text-[10px] md:text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">⭐ Destaque da Comunidade</div>
          <h3 className="font-poppins font-semibold text-white text-sm md:text-base truncate">OrcaSlicer Pro — Curso Completo</h3>
          <p className="text-xs md:text-sm text-white/50 truncate">Aprenda a dominar o OrcaSlicer do zero ao avançado</p>
        </div>
        <div className="flex-shrink-0 text-amber-400 group-hover:translate-x-1 transition-transform mr-2">
          <ArrowRight size={20} />
        </div>
      </a>
    </div>
  );
};

export default CourseBanner;
