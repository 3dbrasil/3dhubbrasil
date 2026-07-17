import { Cuboid, ArrowLeft, Heart, Github, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-background text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-[#00A8FF] hover:underline mb-8">
          <ArrowLeft size={16} /> Voltar ao catálogo
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl neon-bg flex items-center justify-center text-white">
            <Cuboid size={24} />
          </div>
          <h1 className="text-3xl md:text-4xl font-poppins font-bold text-white">
            Sobre o <span className="neon-text">3DHubBrasil</span>
          </h1>
        </div>

        <div className="space-y-8">
          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-poppins font-bold text-white mb-4">O que é?</h2>
            <p className="text-muted-foreground leading-relaxed">
              O 3DHubBrasil é o maior catálogo de ferramentas gratuitas e freemium para impressão 3D do Brasil. 
              Nosso objetivo é reunir em um só lugar todos os recursos que a comunidade maker precisa, 
              desde softwares de modelagem até lojas para vender seus produtos.
            </p>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-poppins font-bold text-white mb-4">Funcionalidades</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-[#00A8FF] mt-1">✓</span>
                <span>Mais de 120 ferramentas organizadas em 10 categorias</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A8FF] mt-1">✓</span>
                <span>Busca em tempo real por nome ou descrição</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A8FF] mt-1">✓</span>
                <span>Modo de edição para adicionar suas próprias ferramentas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A8FF] mt-1">✓</span>
                <span>Navegação flutuante com reordenação por drag-and-drop</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#00A8FF] mt-1">✓</span>
                <span>Salvamento automático no navegador (localStorage)</span>
              </li>
            </ul>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-poppins font-bold text-white mb-4">Stack Tecnológica</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'React 19', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion',
                'Vite 7', 'shadcn/ui', 'Lucide Icons'
              ].map((tech) => (
                <div key={tech} className="px-4 py-3 rounded-xl bg-[#00A8FF]/5 border border-[#00A8FF]/15 text-center text-sm text-white font-medium">
                  {tech}
                </div>
              ))}
            </div>
          </section>

          <section className="glass-card rounded-2xl p-8">
            <h2 className="text-xl font-poppins font-bold text-white mb-4">Contribua</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Este projeto é open-source. Sinta-se à vontade para contribuir com melhorias, 
              novas ferramentas ou correções.
            </p>
            <a
              href="https://github.com/ricardodes/hubbrasil3d"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors font-semibold"
            >
              <Github size={18} /> Ver no GitHub <ExternalLink size={14} />
            </a>
          </section>

          <div className="text-center py-8 text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              Feito com <Heart size={14} className="text-red-500" fill="currentColor" /> pela comunidade 3DHubBrasil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
