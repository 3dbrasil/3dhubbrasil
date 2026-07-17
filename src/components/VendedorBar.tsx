const VENDEDORES = [
  { name: "Mercado Livre", link: "https://www.mercadolivre.com.br/anuncie", favicon: "/favicons/www.mercadolivre.com.br.png" },
  { name: "Amazon BR", link: "https://sellercentral.amazon.com.br", favicon: "/favicons/sellercentral.amazon.com.br.png" },
  { name: "Shopee", link: "https://seller.shopee.com.br", favicon: "/favicons/seller.shopee.com.br.png" },
  { name: "Magalu", link: "https://www.magazineluiza.com.br/parceiro", favicon: "/favicons/www.magazineluiza.com.br.png" },
  { name: "TikTok Shop", link: "https://seller-br.tiktok.com", favicon: "/favicons/seller-br.tiktok.com.png" },
  { name: "Etsy", link: "https://www.etsy.com/sell", favicon: "/favicons/www.etsy.com.png" },
  { name: "Enjoei", link: "https://www.enjoei.com.br", favicon: "/favicons/www.enjoei.com.br.png" },
  { name: "Nuvemshop", link: "https://www.nuvemshop.com.br", favicon: "/favicons/www.nuvemshop.com.br.png" },
  { name: "Tray", link: "https://www.tray.com.br", favicon: "/favicons/www.tray.com.br.png" },
];

const VendedorBar = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
      <div className="flex items-center gap-3 flex-wrap justify-center">
        <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider">Onde Vender</span>
        <div className="flex items-center gap-2">
          {VENDEDORES.map((v, i) => (
            <a
              key={i}
              href={v.link}
              target="_blank"
              rel="noopener noreferrer"
              title={v.name}
              className="group flex-shrink-0 relative"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-all hover:border-[#00A8FF]/50 hover:bg-[#00A8FF]/10 hover:scale-110 hover:shadow-[0_0_16px_rgba(0,168,255,0.3)]">
                <img
                  src={`${base}${v.favicon.replace(/^\//, '')}`}
                  alt={v.name}
                  className="w-7 h-7 object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <span className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 text-[9px] text-white/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {v.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendedorBar;
