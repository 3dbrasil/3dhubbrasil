const news = [
  "🇧🇷 Comunidade maker apoia Venezuela apos terremoto 7.5 com impressao 3D | ",
  "🖨️ Massivit lança RapidWings para impressao 3D na area aeroespacial | ",
  "⚖️ Bambu Lab ameaça desenvolvedor do OrcaSlicer com acoes legais | ",
  "🔬 MIT cria ponte de concreto impresso em 3D de 2.3m | ",
  "🦿 Estudantes de Queen's University levam proteses 3D para Thailandia | ",
  "🏗️ MLab Joinville amplia oferta de impressao 3D em metal | ",
  "👟 Havaianas lança primeiro chinelo impresso em 3D com Zellerfeld | ",
  "🧬 EPFL desenvolve elastomero 15x mais resistente para impressao 3D | ",
  "🌎 3DHubBrasil: catalogo completo de ferramentas 3D | Junte-se a nós! | ",
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
