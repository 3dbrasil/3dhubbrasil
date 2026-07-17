import { useState } from 'react';
import { Droplets, Thermometer, Wind, Gauge, Filter, AlertTriangle } from 'lucide-react';
import { filamentData, filamentTypes } from '../data/filaments';

const Filamentos = () => {
  const [selectedType, setSelectedType] = useState('Todos');
  const [search, setSearch] = useState('');

  const filtered = filamentData.filter(f => {
    const matchType = selectedType === 'Todos' || f.type === selectedType;
    const matchSearch = f.brand.toLowerCase().includes(search.toLowerCase()) || f.type.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'PLA': 'bg-green-500/15 text-green-400 border-green-500/30',
      'PETG': 'bg-blue-500/15 text-blue-400 border-blue-500/30',
      'ABS': 'bg-red-500/15 text-red-400 border-red-500/30',
      'TPU': 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      'ASA': 'bg-amber-500/15 text-amber-400 border-amber-500/30',
      'Nylon': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
      'PC': 'bg-orange-500/15 text-orange-400 border-orange-500/30',
      'PVA': 'bg-pink-500/15 text-pink-400 border-pink-500/30',
      'PLA-CF': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      'PETG-CF': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
      'Nylon-CF': 'bg-teal-500/15 text-teal-400 border-teal-500/30',
      'HIPS': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/30',
      'PP': 'bg-violet-500/15 text-violet-400 border-violet-500/30',
      'Resina': 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30',
    };
    return colors[type] || 'bg-white/10 text-white/60 border-white/20';
  };

  return (
    <div className="min-h-screen bg-[#060D18] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-2">
            <span className="neon-text">Filamentos</span> & Resinas
          </h1>
          <p className="text-muted-foreground text-sm">
            Guia completo de temperaturas, secagem e configurações por marca. Atualizado semanalmente.
          </p>
          <div className="flex items-center gap-2 mt-2 text-[10px] text-white/30">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Buscar marca ou tipo..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00A8FF] transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {filamentTypes.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                selectedType === type
                  ? 'bg-[#00A8FF]/20 text-[#00A8FF] border-[#00A8FF]/40'
                  : 'bg-white/5 text-white/40 border-white/10 hover:bg-white/10 hover:text-white/60'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filtered.map((f, i) => (
            <div key={i} className="glass-card rounded-xl p-4 hover:border-[#00A8FF]/20 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-poppins font-bold text-white text-sm">{f.brand}</h3>
                  <span className={`inline-block text-[9px] font-bold px-2 py-0.5 rounded-full mt-1 border ${getTypeColor(f.type)}`}>
                    {f.type}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5">
                  <Droplets size={12} className="text-blue-400 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 block">Secagem</span>
                    <span className="text-white font-semibold">{f.dryingTemp} / {f.dryingTime}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5">
                  <Thermometer size={12} className="text-red-400 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 block">Bico</span>
                    <span className="text-white font-semibold">{f.nozzleTemp}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5">
                  <Gauge size={12} className="text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 block">Mesa</span>
                    <span className="text-white font-semibold">{f.bedTemp}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-2.5 py-1.5">
                  <Wind size={12} className="text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="text-white/40 block">Velocidade</span>
                    <span className="text-white font-semibold">{f.printSpeed}</span>
                  </div>
                </div>
              </div>

              {f.notes && (
                <div className="mt-2 text-[10px] text-white/30 bg-white/5 rounded-lg px-2.5 py-1.5 flex items-start gap-1.5">
                  <AlertTriangle size={10} className="text-amber-500/60 mt-0.5 flex-shrink-0" />
                  {f.notes}
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <Filter size={40} className="mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-lg text-muted-foreground">Nenhum filamento encontrado.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filamentos;
