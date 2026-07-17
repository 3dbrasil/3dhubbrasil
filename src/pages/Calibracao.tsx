import { useState } from 'react';
import { Target, ChevronDown, ChevronUp } from 'lucide-react';

const fdmParams = [
  { param: 'Bico (°C)', PLA: '200-210', PETG: '235-245', TPU: '225-235', ABS: '240-255', ASA: '245-260', NYLON: '250-265' },
  { param: 'Mesa (°C)', PLA: '55-60', PETG: '75-85', TPU: '40-55', ABS: '95-110', ASA: '95-110', NYLON: '75-90' },
  { param: 'Retração (mm @ mm/s)', PLA: '0,8-1,5 @ 25-40', PETG: '1,5-3,5 @ 20-30', TPU: '0-1 @ 15-25', ABS: '1,5-3,0 @ 20-30', ASA: '1,5-3,0 @ 20-30', NYLON: '2,0-4,0 @ 15-25' },
  { param: 'Velocidade (mm/s)', PLA: '50-80', PETG: '40-60', TPU: '20-40', ABS: '40-60', ASA: '40-55', NYLON: '30-50' },
  { param: 'Flow Rate', PLA: '0,95-1,02', PETG: '0,95-1,00', TPU: '0,95-1,05', ABS: '0,95-1,00', ASA: '0,95-1,00', NYLON: '0,93-1,00' },
  { param: 'Fan (%)', PLA: '100%', PETG: '30-50%', TPU: '0-30%', ABS: '0-30%', ASA: '0%', NYLON: '0-20%' },
  { param: 'Aceleração (mm/s²)', PLA: '500-1000', PETG: '400-800', TPU: '200-500', ABS: '400-700', ASA: '400-700', NYLON: '300-600' },
  { param: 'Jerk (mm/s)', PLA: '8-10', PETG: '7-9', TPU: '5-7', ABS: '7-9', ASA: '7-9', NYLON: '6-8' },
];

const resinParams = [
  { param: 'Exposição Base', value: '6-12s' },
  { param: 'Por Camada', value: '2-4s' },
  { param: 'Espera', value: '2-5s' },
  { param: 'Altura Lift', value: '4-8mm' },
  { param: 'Vel. Lift (mm/min)', value: '40-70' },
];

const brandPresets: Record<string, { filaments: Record<string, Record<string, string>> }> = {
  'Polymaker': {
    filaments: {
      PLA: { bico: '200-210', mesa: '55-60', vel: '50-80', flow: '0.98-1.00', fan: '100%', retracao: '0.8-1.2' },
      PETG: { bico: '235-245', mesa: '80-85', vel: '40-60', flow: '0.96-0.98', fan: '30-40%', retracao: '1.5-2.5' },
      ABS: { bico: '245-255', mesa: '100-110', vel: '40-60', flow: '0.95-0.98', fan: '0-20%', retracao: '1.5-2.5' },
      TPU: { bico: '225-235', mesa: '45-55', vel: '20-35', flow: '0.95-1.00', fan: '0-20%', retracao: '0-0.5' },
      ASA: { bico: '250-260', mesa: '100-110', vel: '40-55', flow: '0.95-0.98', fan: '0%', retracao: '1.5-2.5' },
      Nylon: { bico: '255-265', mesa: '80-90', vel: '30-45', flow: '0.93-0.98', fan: '0-15%', retracao: '2.0-3.5' },
    }
  },
  'SUNLU': {
    filaments: {
      PLA: { bico: '195-210', mesa: '50-60', vel: '50-70', flow: '0.96-1.00', fan: '100%', retracao: '0.8-1.5' },
      PETG: { bico: '230-240', mesa: '75-85', vel: '40-55', flow: '0.95-0.98', fan: '30-50%', retracao: '1.5-3.0' },
      ABS: { bico: '240-250', mesa: '95-110', vel: '40-55', flow: '0.95-1.00', fan: '0%', retracao: '1.5-3.0' },
      TPU: { bico: '220-230', mesa: '40-50', vel: '20-35', flow: '0.95-1.02', fan: '10-30%', retracao: '0-1.0' },
      ASA: { bico: '245-255', mesa: '95-105', vel: '35-50', flow: '0.95-1.00', fan: '0%', retracao: '1.5-3.0' },
      Nylon: { bico: '250-260', mesa: '75-85', vel: '30-45', flow: '0.93-0.98', fan: '0-10%', retracao: '2.0-4.0' },
    }
  },
  'Esun': {
    filaments: {
      PLA: { bico: '200-215', mesa: '55-65', vel: '50-75', flow: '0.97-1.02', fan: '100%', retracao: '0.8-1.5' },
      PETG: { bico: '235-250', mesa: '75-85', vel: '40-60', flow: '0.96-1.00', fan: '30-50%', retracao: '1.5-3.0' },
      ABS: { bico: '240-255', mesa: '100-110', vel: '40-60', flow: '0.95-1.00', fan: '0%', retracao: '1.5-3.0' },
      TPU: { bico: '225-235', mesa: '45-55', vel: '20-40', flow: '0.95-1.05', fan: '0-20%', retracao: '0-0.8' },
      ASA: { bico: '250-260', mesa: '100-110', vel: '40-55', flow: '0.95-0.98', fan: '0%', retracao: '1.5-3.0' },
      Nylon: { bico: '250-270', mesa: '80-90', vel: '25-45', flow: '0.92-0.98', fan: '0-10%', retracao: '2.0-4.0' },
    }
  },
  'Bambu Lab': {
    filaments: {
      PLA: { bico: '200-220', mesa: '55-65', vel: '60-100', flow: '0.95-1.00', fan: '100%', retracao: '0.4-0.8' },
      PETG: { bico: '235-250', mesa: '80-85', vel: '50-70', flow: '0.96-1.00', fan: '30-50%', retracao: '0.6-1.2' },
      ABS: { bico: '245-260', mesa: '100-110', vel: '50-70', flow: '0.95-1.00', fan: '0%', retracao: '0.8-1.5' },
      TPU: { bico: '225-240', mesa: '45-55', vel: '25-45', flow: '0.95-1.02', fan: '0-20%', retracao: '0-0.4' },
      ASA: { bico: '250-265', mesa: '100-110', vel: '45-65', flow: '0.95-1.00', fan: '0%', retracao: '0.8-1.5' },
    }
  },
  'Creality': {
    filaments: {
      PLA: { bico: '195-210', mesa: '50-60', vel: '50-70', flow: '0.95-1.02', fan: '100%', retracao: '0.8-1.5' },
      PETG: { bico: '230-245', mesa: '75-85', vel: '40-55', flow: '0.95-1.00', fan: '30-50%', retracao: '1.5-3.5' },
      ABS: { bico: '240-255', mesa: '95-110', vel: '40-55', flow: '0.95-1.00', fan: '0%', retracao: '1.5-3.0' },
      TPU: { bico: '220-230', mesa: '40-50', vel: '20-35', flow: '0.95-1.05', fan: '0-30%', retracao: '0-1.0' },
    }
  },
};

const fdmSteps = [
  { step: 1, title: 'Nivelar a mesa', desc: 'Essencial — refaça sempre que trocar de material. Ajuste os 4 cantos e o centro.' },
  { step: 2, title: 'Ajustar Z-Offset', desc: 'Calibração da primeira camada. Ajuste em incrementos de 0,01mm até obter aderência perfeita.' },
  { step: 3, title: 'Temperatura do bico', desc: 'Configure a faixa recomendada. Use uma "temperature tower" para encontrar a temperatura ideal.' },
  { step: 4, title: 'Temperatura da mesa', desc: 'Configure a temperatura recomendada. Evite "elephant foot" ajustando a altura da primeira camada.' },
  { step: 5, title: 'Retração', desc: 'Ajuste distância + velocidade. TPU precisa de retração mínima (0-1mm). Teste com um cubo de calibração.' },
  { step: 6, title: 'Velocidade de impressão', desc: 'Primeira camada mais lenta (20-30mm/s). Aumente gradualmente para a velocidade recomendada.' },
  { step: 7, title: 'Flow rate', desc: 'Imprima um cubo de parede simples. Meça com paquímetro e ajuste flow para paredes com espessura correta.' },
  { step: 8, title: 'Cooling fan', desc: 'PLA: 100%. ABS/ASA: desligado. PETG: 30-50%. O fan afeta overhangs e bridging.' },
  { step: 9, title: 'Teste de impressão', desc: 'Imprima um cubo de calibração de 20mm — 3 paredes, 15% de preenchimento. Avalie qualidade visual.' },
  { step: 10, title: 'Verificar aderência', desc: 'Verifique a qualidade da primeira camada: sem gaps, sem "elephant foot", boa adesão à mesa.' },
  { step: 11, title: 'Aceleração e jerk', desc: 'Reduza aceleração e jerk para eliminar ringing/ghosting. Aumente gradualmente até o limite aceitável.' },
  { step: 12, title: 'Notas finais', desc: 'Salve o perfil de calibração. Anote a marca do filamento, lote e parâmetros usados para referência futura.' },
];

const resinSteps = [
  { step: 1, title: 'Limpar tela FEP e bandeja', desc: 'Use escova macia + álcool isopropílico. Nunca use objetos abrasivos na tela FEP.' },
  { step: 2, title: 'Nivelar plataforma', desc: 'Folga mínima entre plataforma e FEP. Use padrão cruzado para verificar uniformidade.' },
  { step: 3, title: 'Tempo de exposição base', desc: 'Configure entre 6-12 segundos dependendo da resina e impressora.' },
  { step: 4, title: 'Tempo por camada', desc: '2-4s por camada normal. Camadas de base (bottom layers): 4-8s com mais exposição.' },
  { step: 5, title: 'Tempo de espera', desc: '2-5s entre camadas para permitir estabilização da resina.' },
  { step: 6, title: 'Altura e velocidade de levantamento', desc: 'Altura: 4-8mm. Velocidade: 40-70mm/min. Peças altas precisam de mais altura.' },
  { step: 7, title: 'Teste XP Validation Matrix', desc: 'Imprima a matrix com 8-10 exposições diferentes. Selecione a exposição ideal visualmente.' },
  { step: 8, title: 'Limpeza pós-impressão', desc: 'IPA 91%+ por 2-3 minutos. Agite suavemente. Não use escova dura.' },
  { step: 9, title: 'Cura UV', desc: '15-30 minutos sob UV. Tempo varia conforme resina e tamanho da peça.' },
  { step: 10, title: 'Configuração de suportes', desc: 'Média para peças mecânicas. Alta para miniaturas. Ângulo de 30-45° recomendado.' },
  { step: 11, title: 'Temperatura ambiente', desc: 'Mantenha 20-25°C. Sempre agite a resina por 1-2 minutos antes de usar.' },
  { step: 12, title: 'Notas finais', desc: 'Use luvas de nitrilo. Máscara recomendada. Trabalhe em área ventilada. Descarte resina corretamente.' },
];

const brandNotes: Record<string, string[]> = {
  'Bambu Lab': ['Auto-leveling com 16+ pontos de medição', 'Z-offset ajustado via Bambu Studio', 'Sistema com câmera + acelerômetro integrado', 'Calibrar flow pelo menu da impressora', 'Perfis otimizados para filamentos Bambu'],
  'Creality': ['Nivelamento manual: 4 cantos + centro', 'Z-offset ajustado no menu da impressora', 'K1 usa Klipper: max_accel 500-1500', 'Ender usa Marlin: M204 / M205', 'Verificar tensão de correias regularmente'],
  'Ender 3': ['Parafusos com mola para nivelamento manual', 'Sem Z-offset no menu — usar Z endstop físico', 'BLTouch recomendado como upgrade', 'Mesa de aço mola (spring steel)', 'Firmware Marlin padrão'],
  'Prusa': ['SuperPINDA para auto-leveling', 'Assistente de "First Layer Calibration"', 'Perfis otimizados no PrusaSlicer', 'Selftest automático completo', 'Validar com 3DBenchy'],
  'Anycubic': ['BLTouch no Kobra e Vyper', 'Nivelamento manual no Mega', 'M204 P600 T800 para ajustes', 'Verificar BLTouch periodicamente', 'Mesa de aço magnética'],
  'Artillery': ['Mesa de aço mola (spring steel)', 'Z-offset: 0.0 a -0.3mm', 'M204 P500 T700 para aceleração', 'Manter mesa limpa com IPA', 'Verificar extrusor periodicamente'],
  'Elegoo': ['Neptune 4 Pro+ com auto-leveling', 'Neptune 4 usa Klipper: max_accel 1000-2000', 'ADAPTIVE_PRESSURE_ADVANCE disponível', 'Foco principal em impressoras resina', 'Firmware atualizado via SD/Octa'],
  'Genérico': ['Nivelamento com método do papel', 'M851 Z{valor} no G-code de início', 'Ajustes conservadores: M204 P500 T700', 'Verificar toda a eletrônica periodicamente', 'Consultar documentação da placa-mãe'],
};

const Accordion = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-4 bg-white/[0.03] hover:bg-white/[0.06] transition-colors">
        <span className="font-semibold text-white text-sm">{title}</span>
        {open ? <ChevronUp size={16} className="text-white/50" /> : <ChevronDown size={16} className="text-white/50" />}
      </button>
      {open && <div className="p-4 border-t border-white/10">{children}</div>}
    </div>
  );
};

const filaments = ['PLA', 'PETG', 'TPU', 'ABS', 'ASA', 'NYLON'];

const Calibracao = () => {
  const [activeBrand, setActiveBrand] = useState('Polymaker');
  const [activeFdmStep, setActiveFdmStep] = useState<number | null>(null);
  const [activeResinStep, setActiveResinStep] = useState<number | null>(null);

  return (
    <div className="bg-[#0a1525]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2 mb-6">
        <Target size={20} className="text-purple-400" />
        ⚙️ Calibração
      </h2>

      <div className="space-y-4">
        <Accordion title="📊 Parâmetros FDM — 6 Filamentos" defaultOpen>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-2 text-white/50 font-semibold">Parâmetro</th>
                  {filaments.map(f => <th key={f} className="py-2 px-2 text-[#00A8FF] font-bold">{f}</th>)}
                </tr>
              </thead>
              <tbody>
                {fdmParams.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-2 px-2 text-white/70 font-medium">{row.param}</td>
                    {filaments.map(f => <td key={f} className="py-2 px-2 text-white/50 text-center">{row[f as keyof typeof row]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Accordion>

        <Accordion title="🧪 Parâmetros Resina">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {resinParams.map((p, i) => (
              <div key={i} className="bg-white/[0.03] rounded-xl p-3 text-center">
                <div className="text-[#00A8FF] font-bold text-lg">{p.value}</div>
                <div className="text-white/50 text-xs mt-1">{p.param}</div>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="🏭 Presets por Marca" defaultOpen>
          <div className="flex flex-wrap gap-2 mb-4">
            {Object.keys(brandPresets).map(brand => (
              <button key={brand} onClick={() => setActiveBrand(brand)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeBrand === brand ? 'bg-[#00A8FF] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
                {brand}
              </button>
            ))}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 px-2 text-white/50 font-semibold">Filamento</th>
                  {['Bico', 'Mesa', 'Vel.', 'Flow', 'Fan', 'Retração'].map(h => (
                    <th key={h} className="py-2 px-2 text-[#00A8FF] font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(brandPresets[activeBrand].filaments).map(([fil, vals]) => (
                  <tr key={fil} className="border-b border-white/5">
                    <td className="py-2 px-2 text-white font-semibold">{fil}</td>
                    <td className="py-2 px-2 text-white/50 text-center">{vals.bico}</td>
                    <td className="py-2 px-2 text-white/50 text-center">{vals.mesa}</td>
                    <td className="py-2 px-2 text-white/50 text-center">{vals.vel}</td>
                    <td className="py-2 px-2 text-white/50 text-center">{vals.flow}</td>
                    <td className="py-2 px-2 text-white/50 text-center">{vals.fan}</td>
                    <td className="py-2 px-2 text-white/50 text-center">{vals.retracao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Accordion>

        <Accordion title="🔧 Processo de Calibração FDM — 12 Passos">
          <p className="text-xs text-white/40 mb-4">Siga os 12 passos na ordem para cada marca/impressora. Salve o perfil após a calibração completa.</p>
          <div className="space-y-2">
            {fdmSteps.map(s => (
              <button key={s.step} onClick={() => setActiveFdmStep(activeFdmStep === s.step ? null : s.step)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${activeFdmStep === s.step ? 'bg-[#00A8FF]/10 border border-[#00A8FF]/30' : 'bg-white/[0.02] border border-white/5 hover:bg-white/5'}`}>
                <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${activeFdmStep === s.step ? 'bg-[#00A8FF] text-white' : 'bg-white/10 text-white/50'}`}>{s.step}</span>
                <div>
                  <span className="text-sm font-semibold text-white">{s.title}</span>
                  {activeFdmStep === s.step && <p className="text-xs text-white/40 mt-1">{s.desc}</p>}
                </div>
              </button>
            ))}
          </div>
        </Accordion>

        <Accordion title="🏭 Notas por Marca de Impressora">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(brandNotes).map(([brand, notes]) => (
              <div key={brand} className="bg-white/[0.03] rounded-xl p-3">
                <h4 className="text-xs font-bold text-[#00A8FF] mb-2">{brand}</h4>
                <ul className="space-y-1">
                  {notes.map((n, i) => <li key={i} className="text-xs text-white/40">• {n}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Accordion>

        <Accordion title="🧪 Processo de Calibração Resina — 12 Passos">
          <p className="text-xs text-white/40 mb-4">Use luvas de nitrilo e máscara. Trabalhe em área ventilada.</p>
          <div className="space-y-2">
            {resinSteps.map(s => (
              <button key={s.step} onClick={() => setActiveResinStep(activeResinStep === s.step ? null : s.step)}
                className={`w-full flex items-start gap-3 p-3 rounded-xl text-left transition-all ${activeResinStep === s.step ? 'bg-purple-500/10 border border-purple-500/30' : 'bg-white/[0.02] border border-white/5 hover:bg-white/5'}`}>
                <span className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${activeResinStep === s.step ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/50'}`}>{s.step}</span>
                <div>
                  <span className="text-sm font-semibold text-white">{s.title}</span>
                  {activeResinStep === s.step && <p className="text-xs text-white/40 mt-1">{s.desc}</p>}
                </div>
              </button>
            ))}
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default Calibracao;
