const news = [
  "🚀 Bambu Lab lança nova impressora multimaterial X1E com 16 cores | ",
  "⚡ OrcaSlicer v2.3 traz suporte a calibração automática | ",
  "🎨 Meshy AI libera geração de texturas PBR no plano gratuito | ",
  "🔧 Klipper 1.0 lançado com melhorias de velocidade | ",
  "📦 Thingiverse ultrapassa 7 milhões de modelos disponíveis | ",
  "🤖 Tencent Hunyuan3D agora gera modelos em menos de 30 segundos | ",
  "🌎 3DHubBrasil: comunidade brasileira de impressão 3D | Junte-se a nós! | "
];

const NewsTicker = () => {
  return (
    <div className="news-ticker-container w-full overflow-hidden bg-[#0a1525]/80 border-y border-white/5 py-2">
      <div className="news-ticker-inner">
        <span>{news.join(" ")}</span>
        <span>{news.join(" ")}</span>
      </div>
    </div>
  );
};

export default NewsTicker;
