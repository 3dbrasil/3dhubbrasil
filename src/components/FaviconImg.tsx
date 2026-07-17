import { useState } from 'react';

interface FaviconImgProps {
  url: string;
  name: string;
  size?: number;
  className?: string;
}

function getToolImage(name: string): string {
  const safeName = name.replace(/[^\w\-]/g, '_');
  return `/toolimages/${safeName}.jpg`;
}

function getNameFavicon(name: string): string {
  const nameToFavicon: Record<string, string> = {
    'Mercado Livre': '/favicons/www.mercadolivre.com.br.png',
    'Amazon BR': '/favicons/sellercentral.amazon.com.br.png',
    'Shopee': '/favicons/seller.shopee.com.br.png',
    'Magalu': '/favicons/www.magazineluiza.com.br.png',
    'TikTok Shop': '/favicons/seller-br.tiktok.com.png',
    'Elo7': '/favicons/www.elo7.com.br.png',
    'Etsy': '/favicons/www.etsy.com.png',
    'Enjoei': '/favicons/www.enjoei.com.br.png',
    'Nuvemshop': '/favicons/www.nuvemshop.com.br.png',
    'Tray': '/favicons/www.tray.com.br.png',
  };
  return nameToFavicon[name] || '';
}

function getFaviconUrl(url: string): string {
  try {
    const u = new URL(url);
    return `/favicons/${u.hostname}.png`;
  } catch {
    return '';
  }
}

const FaviconImg = ({ url, name, size = 32, className = '' }: FaviconImgProps) => {
  const [src, setSrc] = useState<'tool' | 'favicon' | 'fallback'>('tool');

  if (src === 'fallback') {
    return (
      <div 
        className={`flex flex-shrink-0 items-center justify-center rounded-xl font-bold overflow-hidden bg-gradient-to-br from-[#00A8FF]/30 to-[#0077BE]/30 border border-[#00A8FF]/20 ${className}`}
        style={{ width: size, height: size, fontSize: size * 0.32 }}
      >
        <span className="text-white drop-shadow-md">{name.substring(0, 2).toUpperCase()}</span>
      </div>
    );
  }

  if (src === 'favicon') {
    const favUrl = getNameFavicon(name) || getFaviconUrl(url);
    return (
      <img 
        src={favUrl}
        alt={name}
        onError={() => setSrc('fallback')}
        className={`rounded-xl object-cover flex-shrink-0 ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  const nameFav = getNameFavicon(name);
  const toolImg = getToolImage(name);
  const imgSrc = nameFav || toolImg;

  return (
    <img 
      src={imgSrc}
      alt={name}
      onError={() => {
        if (nameFav) {
          setSrc('fallback');
        } else {
          const favUrl = getFaviconUrl(url);
          if (favUrl) {
            setSrc('favicon');
          } else {
            setSrc('fallback');
          }
        }
      }}
      className={`rounded-xl object-cover flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    />
  );
};

export default FaviconImg;
