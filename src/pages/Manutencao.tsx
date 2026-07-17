import { useState } from 'react';
import { Check, Flame, Bed, Ruler, Link2, Fan, Zap, Wrench, ClipboardList } from 'lucide-react';

interface MaintenanceItem {
  name: string;
  desc: string;
  freq: 'Semanal' | 'Mensal' | 'Trimestral';
}

interface Category {
  id: string;
  name: string;
  icon: any;
  color: string;
  items: MaintenanceItem[];
}

const categories: Category[] = [
  {
    id: 'hotend', name: 'Hotend', icon: Flame, color: 'text-orange-400',
    items: [
      { name: 'Limpar bico', desc: 'Remover resíduo de filamento acumulado no bico com agulha de limpeza', freq: 'Semanal' },
      { name: 'Verificar extrusão', desc: 'Testar extrusão de filamento para garantir fluxo contínuo sem obstruções', freq: 'Semanal' },
      { name: 'Inspecionar tubo PTFE', desc: 'Verificar desgaste, deformação ou obstrução no tubo guia de filamento', freq: 'Mensal' },
      { name: 'Trocar bico (se necessário)', desc: 'Avaliar desgaste do bico e substituir se apresentar vazamentos ou mau acabamento', freq: 'Trimestral' },
      { name: 'Limpar heatbreak', desc: 'Remover plástico acumulado no interior do heatbreak para evitar retrações falhando', freq: 'Trimestral' },
      { name: 'Verificar temperatura do hotend', desc: 'Comparar temperatura real com a configurada usando termômetro ou sensor externo', freq: 'Mensal' },
    ]
  },
  {
    id: 'mesa', name: 'Mesa', icon: Bed, color: 'text-blue-400',
    items: [
      { name: 'Limpar mesa/vidro', desc: 'Remover resíduos de adesivo, gordura e poeira com álcool isopropílico', freq: 'Semanal' },
      { name: 'Verificar nivelamento', desc: 'Testar nivelamento em todos os cantos e centro da mesa com folha de papel', freq: 'Semanal' },
      { name: 'Verificar superfície de impressão', desc: 'Inspecionar arranhões, rachaduras ou deformações na superfície', freq: 'Mensal' },
      { name: 'Lubrificar guias da mesa Z', desc: 'Aplicar lubrificante nas barras guia verticais do eixo Z da mesa', freq: 'Mensal' },
      { name: 'Verificar springs e parafusos', desc: 'Inspecionar molas e parafusos quanto a deformação ou folga', freq: 'Trimestral' },
    ]
  },
  {
    id: 'eixos', name: 'Eixos', icon: Ruler, color: 'text-green-400',
    items: [
      { name: 'Lubrificar eixo X', desc: 'Aplicar óleo ou graxa nas barras e buchas do eixo X', freq: 'Mensal' },
      { name: 'Lubrificar eixo Y', desc: 'Aplicar óleo ou graxa nas barras e buchas do eixo Y', freq: 'Mensal' },
      { name: 'Lubrificar eixo Z', desc: 'Aplicar óleo ou graxa nas barras guia e fuso do eixo Z', freq: 'Mensal' },
      { name: 'Verificar folga nos eixos', desc: 'Movimentar manualmente cada eixo para detectar folgas ou movimentos irregulares', freq: 'Trimestral' },
      { name: 'Inspecionar buchas/rolamentos', desc: 'Verificar desgaste de buchas de bronze ou rolamentos lineares', freq: 'Trimestral' },
    ]
  },
  {
    id: 'correias', name: 'Correias', icon: Link2, color: 'text-yellow-400',
    items: [
      { name: 'Verificar tensão das correias X/Y', desc: 'Avaliar tensão — devem ter som de "mi" ao beliscar', freq: 'Mensal' },
      { name: 'Verificar tensão da correia Z', desc: 'Verificar tensão da correia ou fuso do eixo Z', freq: 'Mensal' },
      { name: 'Inspecionar dentes das correias', desc: 'Verificar desgaste, rasgos ou dentes faltando', freq: 'Trimestral' },
      { name: 'Verificar rodas dentadas', desc: 'Inspecionar engrenagens motrizes e idlers quanto a desgaste', freq: 'Trimestral' },
    ]
  },
  {
    id: 'ventilacao', name: 'Ventilação', icon: Fan, color: 'text-cyan-400',
    items: [
      { name: 'Limpar ventilador do hotend', desc: 'Remover poeira e filamento derretido do ventilador de resfriamento', freq: 'Mensal' },
      { name: 'Limpar ventilador da eletrônica', desc: 'Remover poeira do ventilador da placa-mãe e fonte', freq: 'Mensal' },
      { name: 'Verificar fluxo de ar do hotend', desc: 'Confirmar que o duto direciona o fluxo corretamente para o bico', freq: 'Semanal' },
      { name: 'Inspecionar dutos de ar', desc: 'Verificar rachaduras, desconexões ou deformações nos dutos', freq: 'Trimestral' },
    ]
  },
  {
    id: 'eletronica', name: 'Eletrônica', icon: Zap, color: 'text-amber-400',
    items: [
      { name: 'Verificar conexões eletrônicas', desc: 'Inspecionar conectores e cabos quanto a folga ou oxidação', freq: 'Trimestral' },
      { name: 'Limpar placa-mãe', desc: 'Remover poeira da placa-mãe e fonte com ar comprimido', freq: 'Trimestral' },
      { name: 'Verificar cabos termistor', desc: 'Inspecionar cabos dos termistores quanto a desgaste ou curtos', freq: 'Trimestral' },
      { name: 'Testar fim de curso (endstops)', desc: 'Testar todos os sensores de fim de curso', freq: 'Trimestral' },
    ]
  },
  {
    id: 'estrutura', name: 'Estrutura', icon: Wrench, color: 'text-rose-400',
    items: [
      { name: 'Apertar parafusos da estrutura', desc: 'Verificar e reapertar todos os parafusos do chassi', freq: 'Trimestral' },
      { name: 'Verificar prumo da impressora', desc: 'Confirmar que a impressora está nivelada sem oscilações', freq: 'Trimestral' },
      { name: 'Inspecionar amortecedores/pés', desc: 'Verificar condições dos pés de borracha ou amortecedores', freq: 'Trimestral' },
      { name: 'Verificar tampa/invólucro', desc: 'Inspecionar a tampa acrílica quanto a rachaduras', freq: 'Trimestral' },
    ]
  },
  {
    id: 'geral', name: 'Geral', icon: ClipboardList, color: 'text-purple-400',
    items: [
      { name: 'Atualizar firmware', desc: 'Verificar atualizações de firmware disponíveis', freq: 'Trimestral' },
      { name: 'Limpar área de trabalho', desc: 'Remover sucatas, filamentos soltos e poeira', freq: 'Semanal' },
      { name: 'Verificar estoque de peças', desc: 'Conferir bicos, PTFE, termistores e consumíveis', freq: 'Mensal' },
      { name: 'Revisar parâmetros de impressão', desc: 'Avaliar e ajustar temperaturas, retrações e velocidades', freq: 'Mensal' },
    ]
  },
];

const freqColors: Record<string, string> = {
  Semanal: 'bg-green-500/20 text-green-400 border-green-500/30',
  Mensal: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Trimestral: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const Manutencao = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [filter, setFilter] = useState<string>('Todos');

  const toggle = (key: string) => setChecked(prev => ({ ...prev, [key]: !prev[key] }));

  const totalItems = categories.reduce((sum, c) => sum + c.items.length, 0);
  const checkedCount = Object.values(checked).filter(Boolean).length;

  const filtered = filter === 'Todos'
    ? categories
    : categories.map(c => ({ ...c, items: c.items.filter(i => i.freq === filter) })).filter(c => c.items.length > 0);

  const freqCounts = { Semanal: 0, Mensal: 0, Trimestral: 0 };
  categories.forEach(c => c.items.forEach(i => { freqCounts[i.freq]++; }));

  return (
    <div className="bg-[#0a1525]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2">
          <Wrench size={20} className="text-orange-400" />
          🔥 Manutenção Preventiva
        </h2>
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/50">{checkedCount}/{totalItems} concluídos</span>
          <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full transition-all" style={{ width: `${(checkedCount / totalItems) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {['Todos', 'Semanal', 'Mensal', 'Trimestral'].map(f => (
          <button key={f} onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${filter === f ? 'bg-[#00A8FF] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
            {f}{f !== 'Todos' ? ` (${freqCounts[f as keyof typeof freqCounts]})` : ''}
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filtered.map(cat => {
          const Icon = cat.icon;
          return (
            <div key={cat.id}>
              <h3 className={`text-sm font-bold ${cat.color} mb-3 flex items-center gap-2`}>
                <Icon size={16} />
                {cat.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {cat.items.map(item => {
                  const key = `${cat.id}::${item.name}`;
                  const isChecked = !!checked[key];
                  return (
                    <button key={key} onClick={() => toggle(key)}
                      className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${isChecked ? 'bg-green-500/10 border-green-500/30' : 'bg-white/[0.02] border-white/5 hover:bg-white/5'}`}>
                      <div className={`mt-0.5 w-5 h-5 rounded-lg border-2 flex-shrink-0 flex items-center justify-center transition-all ${isChecked ? 'bg-green-500 border-green-500' : 'border-white/20'}`}>
                        {isChecked && <Check size={12} className="text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${isChecked ? 'text-green-300 line-through opacity-60' : 'text-white'}`}>{item.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border font-bold ${freqColors[item.freq]}`}>{item.freq}</span>
                        </div>
                        <p className="text-xs text-white/40 mt-0.5">{item.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Manutencao;
