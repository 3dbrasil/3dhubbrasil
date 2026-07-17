import { useState } from 'react';
import { Search, Key, ExternalLink, Loader2, AlertCircle, Tag, Settings2 } from 'lucide-react';

const FILAMENTS = [
  { label: 'PLA Fosco', query: 'PLA filamento 1kg' },
  { label: 'PLA Silk', query: 'PLA Silk filamento 1kg' },
  { label: 'PLA', query: 'PLA filamento 1kg' },
  { label: 'PETG', query: 'PETG filamento 1kg' },
  { label: 'ABS', query: 'ABS filamento 1kg' },
  { label: 'TPU', query: 'TPU filamento 1kg' },
  { label: 'ASA', query: 'ASA filamento 1kg' },
];

interface ShopResult {
  name: string;
  link: string;
  price: string;
  priceNum: number;
  source: string;
}

interface FilamentResult {
  filament: string;
  results: ShopResult[];
  loading: boolean;
  error?: string;
}

const extractPrice = (r: any): { price: string; priceNum: number } => {
  if (r.extracted_price != null && typeof r.extracted_price === 'number') {
    return { price: `R$ ${r.extracted_price.toFixed(2)}`, priceNum: r.extracted_price };
  }
  if (r.price) {
    const m = String(r.price).replace(/\./g, '').replace(',', '.').match(/R?\$?\s*([\d]+[.,]?\d*)/);
    if (m) {
      const n = parseFloat(m[1]);
      if (!isNaN(n)) return { price: r.price, priceNum: n };
    }
    return { price: r.price, priceNum: 999999 };
  }
  return { price: '', priceNum: 999999 };
};

const CotacaoBar = () => {
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('serpapi-key') || '');
  const [expanded, setExpanded] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [results, setResults] = useState<FilamentResult[]>([]);
  const [searching, setSearching] = useState(false);

  const saveKey = (val: string) => {
    setApiKey(val);
    localStorage.setItem('serpapi-key', val);
  };

  const searchFilament = async (filament: { label: string; query: string }): Promise<FilamentResult> => {
    const q = `${filament.query} comprar barato Brasil site:shopee.com.br OR site:mercadolivre.com.br OR site:amazon.com.br`;
    const url = `/api/serpapi/search.json?engine=google&q=${encodeURIComponent(q)}&api_key=${encodeURIComponent(apiKey.trim())}&hl=pt-BR&gl=br&num=15`;

    const res = await fetch(url);
    if (!res.ok) {
      const msg = res.status === 401 ? 'Chave API invalida' : `Erro ${res.status}`;
      return { filament: filament.label, results: [], loading: false, error: msg };
    }

    const data = await res.json();
    if (data.error) {
      return { filament: filament.label, results: [], loading: false, error: data.error };
    }

    const organic = (data.organic_results || [])
      .filter((r: any) => {
        const link = r.link || '';
        return link.includes('shopee') || link.includes('mercadolivre') || link.includes('amazon.com.br') || link.includes('magazineluiza') || link.includes('magalu');
      })
      .map((r: any) => {
        const { price, priceNum } = extractPrice(r);
        const source = new URL(r.link).hostname.replace('www.', '').split('.')[0];
        return {
          name: r.title || '',
          link: r.link || '#',
          price,
          priceNum,
          source,
        };
      })
      .filter((r: ShopResult) => r.priceNum < 999999)
      .sort((a: ShopResult, b: ShopResult) => a.priceNum - b.priceNum)
      .slice(0, 5);

    return { filament: filament.label, results: organic, loading: false };
  };

  const handleSearch = async () => {
    if (!apiKey.trim()) return;
    setSearching(true);
    setResults(FILAMENTS.map(f => ({ filament: f.label, results: [], loading: true })));

    const allResults: FilamentResult[] = [];

    for (const filament of FILAMENTS) {
      try {
        const r = await searchFilament(filament);
        allResults.push(r);
        setResults([...allResults]);
      } catch (err: any) {
        allResults.push({ filament: filament.label, results: [], loading: false, error: err.message || 'Erro de conexao' });
        setResults([...allResults]);
      }
    }

    setSearching(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
      <div className="rounded-xl border border-[#00A8FF]/20 bg-[#060D18]/90 backdrop-blur-sm overflow-hidden">

        <div className="flex items-center gap-2 px-4 py-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
            <Tag size={13} className="text-white" />
          </div>
          <span className="font-poppins font-bold text-white text-xs sm:text-sm flex-shrink-0">Cotacao</span>

          <button
            onClick={() => setExpanded(!expanded)}
            className="ml-1 text-[10px] text-[#00A8FF] hover:underline flex-shrink-0"
          >
            {expanded ? 'fechar' : 'ver precos'}
          </button>

          <div className="flex-1" />

          <button
            onClick={() => setShowConfig(!showConfig)}
            className="p-1 rounded-md hover:bg-white/5 transition-colors flex-shrink-0"
          >
            <Settings2 size={12} className="text-white/40" />
          </button>
        </div>

        {showConfig && (
          <div className="px-4 pb-3 pt-1 border-t border-white/5">
            <div className="flex items-center gap-2 mb-1.5">
              <Key size={10} className="text-amber-400" />
              <span className="text-[10px] font-semibold text-white/70">Chave API SerpAPI</span>
              <a href="https://serpapi.com" target="_blank" rel="noopener noreferrer" className="text-[10px] text-[#00A8FF] hover:underline ml-auto inline-flex items-center gap-0.5">
                cadastrar <ExternalLink size={8} />
              </a>
            </div>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => saveKey(e.target.value)}
              placeholder="Cole sua chave API aqui..."
              className="w-full bg-[#0F1C2E] border border-white/10 rounded-lg px-3 py-1.5 text-[11px] text-white focus:outline-none focus:border-[#00A8FF] transition-colors placeholder:text-muted-foreground/50"
            />
          </div>
        )}

        {expanded && (
          <div className="px-4 pb-3 border-t border-white/5">
            <button
              onClick={handleSearch}
              disabled={!apiKey.trim() || searching}
              className="w-full mt-3 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-[11px] transition-all disabled:opacity-40 disabled:cursor-not-allowed neon-bg text-white hover:scale-[1.01] active:scale-[0.99]"
            >
              {searching ? (
                <>
                  <Loader2 size={12} className="animate-spin" />
                  Buscando...
                </>
              ) : (
                <>
                  <Search size={12} />
                  Buscar Menores Precos
                </>
              )}
            </button>

            {results.length > 0 && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                {results.map((fr, fi) => (
                  <div key={fi} className="bg-white/5 rounded-lg border border-white/5 overflow-hidden">
                    <div className="px-2.5 py-1.5 border-b border-white/5 flex items-center gap-1.5">
                      <Tag size={10} className="text-emerald-400" />
                      <span className="font-semibold text-white text-[10px] leading-tight">{fr.filament}</span>
                    </div>
                    <div className="p-1.5">
                      {fr.loading ? (
                        <div className="flex items-center justify-center py-2 gap-1 text-muted-foreground text-[10px]">
                          <Loader2 size={10} className="animate-spin" />
                          ...
                        </div>
                      ) : fr.error ? (
                        <div className="flex items-center gap-1 py-1.5 px-2 text-amber-400 text-[9px] bg-amber-400/5 rounded">
                          <AlertCircle size={10} className="flex-shrink-0" />
                          {fr.error}
                        </div>
                      ) : fr.results.length === 0 ? (
                        <p className="text-muted-foreground text-[9px] py-1.5 text-center">Sem resultados</p>
                      ) : (
                        <div className="space-y-0.5">
                          {fr.results.map((r, ri) => (
                            <a
                              key={ri}
                              href={r.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 p-1 rounded bg-[#0F1C2E]/60 hover:bg-[#00A8FF]/5 transition-colors group"
                            >
                              <span className="text-[8px] font-bold text-[#00A8FF]/50 w-3 text-center flex-shrink-0">{ri + 1}</span>
                              <div className="min-w-0 flex-1">
                                <p className="text-[9px] text-white/80 group-hover:text-[#00A8FF] transition-colors line-clamp-1 leading-tight">
                                  {r.source}
                                </p>
                              </div>
                              {r.price && (
                                <span className="text-[9px] font-bold text-emerald-400 flex-shrink-0">
                                  {r.price}
                                </span>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CotacaoBar;
