import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  totalItems: number;
}

const HeroSection = ({ totalItems }: HeroSectionProps) => {
  return (
    <section className="relative pt-32 pb-32 lg:pt-40 lg:pb-40 flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-3dprinter.jpg)' }}
      >
        <div className="absolute inset-0 bg-[#060D18]/70 backdrop-blur-[1px]"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-poppins font-extrabold text-white leading-tight mb-6">
            O maior catálogo de ferramentas gratuitas para <br className="hidden lg:block"/>
            <span className="neon-text">Impressão 3D do Brasil</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Descubra, explore e use as melhores ferramentas da comunidade maker.
          </p>

          <div className="flex flex-col items-center justify-center mb-10">
            <div className="text-6xl md:text-8xl font-bold font-poppins neon-text mb-2">
              {totalItems}
            </div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              ferramentas gratuitas e freemium em um só lugar
            </p>
          </div>

          <button 
            onClick={() => {
              window.scrollBy({ top: 600, behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full neon-bg text-white font-bold text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar Catálogo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
