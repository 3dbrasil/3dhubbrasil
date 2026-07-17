import { ArrowRight, Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#060D18] pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative overflow-hidden rounded-2xl mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600/25 via-orange-500/15 to-amber-900/20" />
          <div className="absolute inset-0 border border-amber-500/20 rounded-2xl" />
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 p-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300">
              <Play size={28} fill="currentColor" />
            </div>

            <div className="flex-grow text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/25 text-amber-300 text-[10px] font-bold uppercase tracking-widest mb-2">
                ⭐ Apoie o Projeto
              </div>
              <h3 className="font-poppins font-bold text-xl text-white mb-1">OrcaSlicer Pro — Curso Completo</h3>
              <p className="text-sm text-white/50 max-w-md">Ao adquirir o curso você domina o OrcaSlicer e apoia diretamente o 3DHubBrasil.</p>
            </div>

            <a
              href="https://orcaslicerpro.space-z.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm hover:from-amber-400 hover:to-orange-400 transition-all hover:scale-105 shadow-[0_0_24px_rgba(245,158,11,0.35)] whitespace-nowrap"
            >
              Conhecer o Curso <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="3DHubBrasil" className="w-7 h-7 rounded-lg object-cover" />
            <span className="font-poppins font-bold text-xl text-white">3DHub<span className="text-[#00A8FF]">Brasil</span></span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://t.me/richardcal" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-[#229ED9] hover:text-white transition-colors" title="Telegram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-[#FF0000] hover:text-white transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Feito com ❤️ pela comunidade 3DHubBrasil</p>
          <p>© 2024 Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
