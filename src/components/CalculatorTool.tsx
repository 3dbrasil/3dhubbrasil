import { useState } from 'react';
import { Calculator, Download, RotateCcw, DollarSign, Zap, Layers, Package, Users, FileText, Settings } from 'lucide-react';

const taxRegimes = [
  { id: 'none', label: 'Sem imposto', rate: 0 },
  { id: 'mei', label: 'MEI', rate: 0 },
  { id: 'simples', label: 'Simples Nacional', rate: 6 },
  { id: 'presumido', label: 'Lucro Presumido', rate: 11.33 },
  { id: 'real', label: 'Lucro Real', rate: 15 },
];

let idC = 0;

const CalculatorTool = () => {
  const [nPeca, setNPeca] = useState('');
  const [pesoTotal, setPesoTotal] = useState('50');
  const [qtd, setQtd] = useState('1');
  const [tH, setTH] = useState('2');
  const [tM, setTM] = useState('0');
  const [pW, setPW] = useState('200');
  const [pKwh, setPKwh] = useState('0.75');
  const [desc, setDesc] = useState('15');
  const [mH, setMH] = useState('30');
  const [mVH, setMVH] = useState('25');
  const [eC, setEC] = useState('2');
  const [entC, setEntC] = useState('10');
  const [ads, setAds] = useState('0');
  const [reg, setReg] = useState('none');
  const [impC, setImpC] = useState('0');
  const [mp, setMp] = useState('Shopee');
  const [mpC, setMpC] = useState('20');
  const [localTax, setLocalTax] = useState('');
  const [taxFix, setTaxFix] = useState('0');
  const [vVenda, setVVenda] = useState('0');
  const [margD, setMargD] = useState('50');

  const [mats, setMats] = useState<{ id: string; nome: string; peso: string; preco: string; on: boolean }[]>([
    { id: String(idC++), nome: 'PLA', peso: '50', preco: '85', on: true },
  ]);
  const [ins, setIns] = useState<{ id: string; nome: string; custo: string }[]>([
    { id: String(idC++), nome: 'Parafusos', custo: '1' },
  ]);

  const [showR, setShowR] = useState(false);
  const [res, setRes] = useState<any>(null);

  const n = (v: string) => v === '' ? 0 : Number(v);
  const um = (id: string, f: string, v: any) => setMats(p => p.map(m => m.id === id ? { ...m, [f]: v } : m));
  const ui = (id: string, f: string, v: any) => setIns(p => p.map(i => i.id === id ? { ...i, [f]: v } : i));

  const pesoMats = mats.filter(m => m.on).reduce((a, m) => a + n(m.peso), 0);
  const sobra = Math.max(0, n(pesoTotal) - pesoMats);

  const calcular = () => {
    const horas = n(tH) + n(tM) / 60;
    const matsAtivos = mats.filter(m => m.on);
    let cFil = 0;
    matsAtivos.forEach(m => { cFil += (n(m.peso) / 1000) * n(m.preco); });
    const cDesc = cFil * n(desc) / 100;
    const cEnerg = (n(pW) * horas / 1000) * n(pKwh);
    const cIns = ins.reduce((a, i) => a + n(i.custo), 0);
    const cMO = (n(mH) / 60) * n(mVH);
    const cProd = cFil + cDesc + cEnerg + cIns + n(eC) + cMO + n(entC) + n(ads);
    const cTotal = cProd * n(qtd);
    const txMp = mp === 'Custom' ? n(mpC) : ({ 'Shopee': 20, 'Mercado Livre': 16, 'Amazon': 15, 'AliExpress': 12, 'Etsy': 10, 'Instagram': 0, 'WhatsApp': 0, 'Loja Própria': 0 } as any)[mp] || 0;
    const txMpRate = txMp / 100;
    const pImp = reg === 'custom' ? n(impC) : (taxRegimes.find(r => r.id === reg)?.rate || 0) / 100;
    const margemDesejada = n(margD) / 100;
    const precoVendaCalc = cProd > 0 ? (cProd * (1 + margemDesejada)) / (1 - txMpRate - pImp) : 0;
    const vFinal = n(vVenda) > 0 ? n(vVenda) : precoVendaCalc;
    const rBruta = vFinal * n(qtd);
    const txMpV = rBruta * txMpRate;
    const txFix = n(taxFix) * n(qtd);
    const cImp = rBruta * pImp;
    const rLiq = rBruta - txMpV - txFix - cImp;
    const lucro = rLiq - cTotal;
    setRes({ cFil, cDesc, cEnerg, cIns, cMO, cEmbal: n(eC), cEnt: n(entC), cAds: n(ads), cProd, cTotal, txMpV, txMp, txFix, cImp, pImp: pImp * 100, rBruta, rLiq, lucro, margem: rBruta > 0 ? lucro / rBruta * 100 : 0, markup: cTotal > 0 ? rBruta / cTotal : 0, cGram: pesoMats > 0 ? cProd / pesoMats : 0, horas, matsAtivos, pesoMats, precoVendaCalc, vFinal });
    setShowR(true);
  };

  const gerarPDF = async () => {
    if (!res) return;
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF();
    const pw = doc.internal.pageSize.getWidth();
    doc.setFillColor(6, 13, 24); doc.rect(0, 0, pw, 30, 'F');
    doc.setFillColor(0, 168, 255); doc.rect(0, 30, pw, 1, 'F');
    doc.setFont('helvetica', 'bold'); doc.setFontSize(16); doc.setTextColor(255);
    doc.text('3DHubBrasil', 10, 12);
    doc.setFontSize(8); doc.setTextColor(150); doc.text('Relatório de Custos - Impressão 3D', 10, 18);
    doc.setFontSize(6); doc.setTextColor(0, 168, 255);
    doc.text(new Date().toLocaleDateString('pt-BR') + ' ' + new Date().toLocaleTimeString('pt-BR'), pw - 10, 12, { align: 'right' });
    let y = 38;
    const s = (t: string, items: { l: string; v: string; h?: boolean }[]) => {
      if (y + 6 + items.length * 4.5 > 270) { doc.addPage(); y = 12; }
      doc.setFillColor(15, 28, 46); doc.roundedRect(10, y, pw - 20, 5 + items.length * 4.5, 2, 2, 'F');
      doc.setFont('helvetica', 'bold'); doc.setFontSize(7); doc.setTextColor(0, 168, 255); doc.text(t, 14, y + 4); y += 6;
      items.forEach(i => {
        doc.setFont('helvetica', 'normal'); doc.setFontSize(6); doc.setTextColor(170); doc.text(i.l, 16, y);
        doc.setFont('helvetica', 'bold'); doc.setTextColor(i.h ? 0 : 255, i.h ? 220 : 255, i.h ? 100 : 255); doc.text(i.v, pw - 14, y, { align: 'right' }); y += 4.5;
      }); y += 3;
    };
    s('PEÇA', [{ l: 'Nome', v: nPeca || '-' }, { l: 'Peso total', v: pesoTotal + 'g' }, { l: 'Qtd', v: qtd }, { l: 'Tempo', v: Math.floor(res.horas) + 'h ' + Math.round(res.horas % 1 * 60) + 'min' }]);
    const mi = res.matsAtivos.map((m: any) => ({ l: `${m.nome} - ${m.peso}g @ R$${m.preco}/kg`, v: `R$ ${((n(m.peso) / 1000) * n(m.preco)).toFixed(2)}` }));
    if (sobra > 0) mi.push({ l: `Suporte/Purga - ${sobra.toFixed(1)}g`, v: 'R$ 0.00' });
    mi.push({ l: `Desperdício (${desc}%)`, v: `R$ ${res.cDesc.toFixed(2)}` });
    s('MATERIAIS', mi);
    s('CUSTOS', [{ l: 'Filamento', v: `R$ ${res.cFil.toFixed(2)}` }, { l: 'Desperdício', v: `R$ ${res.cDesc.toFixed(2)}` }, { l: 'Energia', v: `R$ ${res.cEnerg.toFixed(2)}` }, { l: 'Insumos', v: `R$ ${res.cIns.toFixed(2)}` }, { l: 'Mão de obra', v: `R$ ${res.cMO.toFixed(2)}` }, { l: 'Embalagem', v: `R$ ${res.cEmbal.toFixed(2)}` }, { l: 'Entrega', v: `R$ ${res.cEnt.toFixed(2)}` }, { l: 'Ads', v: `R$ ${res.cAds.toFixed(2)}` }, { l: 'CUSTO UN', v: `R$ ${res.cProd.toFixed(2)}`, h: true }, { l: 'CUSTO TOTAL', v: `R$ ${res.cTotal.toFixed(2)}`, h: true }]);
    s('LUCRO', [{ l: 'Receita bruta', v: `R$ ${res.rBruta.toFixed(2)}` }, { l: `Taxa ${mp}`, v: `-R$ ${res.txMpV.toFixed(2)}` }, { l: 'Taxa fixa', v: `-R$ ${res.txFix.toFixed(2)}` }, { l: `Impostos (${res.pImp}%)`, v: `-R$ ${res.cImp.toFixed(2)}` }, { l: 'Receita líquida', v: `R$ ${res.rLiq.toFixed(2)}` }, { l: 'LUCRO', v: `R$ ${res.lucro.toFixed(2)}`, h: true }, { l: 'Margem', v: `${res.margem.toFixed(1)}%`, h: true }, { l: 'Markup', v: `${res.markup.toFixed(2)}x` }]);
    doc.setFillColor(0, 168, 255); doc.rect(0, doc.internal.pageSize.getHeight() - 12, pw, 12, 'F');
    doc.setFontSize(5); doc.setTextColor(255); doc.text('3DHubBrasil', pw / 2, doc.internal.pageSize.getHeight() - 6, { align: 'center' });
    doc.save(`relatorio-${nPeca || 'pecas'}-${new Date().toISOString().split('T')[0]}.pdf`);
  };

  const resetar = () => {
    idC = 0;
    setNPeca(''); setPesoTotal('50'); setQtd('1'); setTH('2'); setTM('0'); setPW('200'); setPKwh('0.75'); setDesc('15');
    setMH('30'); setMVH('25'); setEC('2'); setEntC('10'); setAds('0'); setReg('none'); setImpC('0');
    setMp('Shopee'); setMpC('20'); setLocalTax(''); setTaxFix('0'); setVVenda('0'); setMargD('50');
    setMats([{ id: String(idC++), nome: 'PLA', peso: '50', preco: '85', on: true }]);
    setIns([{ id: String(idC++), nome: 'Parafusos', custo: '1' }]);
    setShowR(false); setRes(null);
  };

  const ic = "w-full bg-[#0a1525] border border-white/20 rounded-lg py-2.5 px-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF]/30 transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none";
  const sc = "w-full bg-[#0a1525] border border-white/20 rounded-lg py-2.5 px-3 text-sm text-white focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF]/30 transition-colors";
  const L = ({ l, children }: { l: string; children: React.ReactNode }) => <div className="space-y-1"><label className="text-xs font-semibold text-white/50">{l}</label>{children}</div>;

  return (
    <div className="glass-card rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-poppins font-bold text-white flex items-center gap-2">
          <Calculator size={16} className="text-emerald-400" /> Calculadora de Impressão 3D
        </h2>
        <button onClick={resetar} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-colors"><RotateCcw size={14} /></button>
      </div>

      <div className="space-y-3">
        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <h3 className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider flex items-center gap-1.5"><Layers size={12} /> Peça</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <L l="Nome da peça"><input type="text" value={nPeca} onChange={e => setNPeca(e.target.value)} placeholder="Ex: Suporte" className={ic} /></L>
            <L l="Peso total da peça (g)"><input type="number" value={pesoTotal} onChange={e => setPesoTotal(e.target.value)} className={ic} min="0" step="0.1" /></L>
            <L l="Quantidade"><input type="number" value={qtd} onChange={e => setQtd(e.target.value)} className={ic} min="1" /></L>
            <L l="Tempo de impressão">
              <div className="flex gap-2">
                <div className="flex-1 relative"><input type="number" value={tH} onChange={e => setTH(e.target.value)} className={ic} min="0" /><span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/30">horas</span></div>
                <div className="flex-1 relative"><input type="number" value={tM} onChange={e => setTM(e.target.value)} className={ic} min="0" max="59" /><span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/30">min</span></div>
              </div>
            </L>
          </div>
        </div>

        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-1.5"><Layers size={12} /> Filamentos / Materiais</h3>
            <button onClick={() => setMats(p => [...p, { id: String(idC++), nome: 'PLA', peso: '0', preco: '85', on: true }])} className="text-xs px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 font-semibold">+ Material</button>
          </div>
          <div className="grid grid-cols-[auto_1fr_80px_90px_24px] gap-2 px-1 text-[10px] text-white/30 font-semibold uppercase mb-1.5">
            <span className="w-4"></span><span>Nome do material</span><span>Peso (g)</span><span>Preço por kg (R$)</span><span></span>
          </div>
          <div className="space-y-1.5">
            {mats.map(m => (
              <div key={m.id} className="grid grid-cols-[auto_1fr_80px_90px_24px] gap-2 items-center p-1.5 rounded-lg bg-[#0F1C2E]/60 border border-white/5">
                <input type="checkbox" checked={m.on} onChange={e => um(m.id, 'on', e.target.checked)} className="rounded bg-white/10 border-white/20 text-[#00A8FF] focus:ring-[#00A8FF] w-4 h-4" />
                <input type="text" value={m.nome} onChange={e => um(m.id, 'nome', e.target.value)} className={ic} placeholder="PLA, ABS, PETG..." />
                <input type="number" value={m.peso} onChange={e => um(m.id, 'peso', e.target.value)} className={ic} min="0" step="0.1" />
                <input type="number" value={m.preco} onChange={e => um(m.id, 'preco', e.target.value)} className={ic} min="0" step="0.01" />
                {mats.length > 1 && <button onClick={() => setMats(p => p.filter(x => x.id !== m.id))} className="text-xs text-red-400/50 hover:text-red-400 p-0.5">✕</button>}
              </div>
            ))}
          </div>
          {sobra > 0 && (
            <div className="mt-2 text-xs text-amber-400/70 bg-amber-500/10 border border-amber-500/20 rounded-lg px-3 py-1.5 inline-block">
              Suporte/Purga: {sobra.toFixed(1)}g
            </div>
          )}
          <div className="mt-2 flex items-center gap-4">
            <div className="flex-1"><L l={`Desperdício de material: ${desc}%`}><input type="range" min="0" max="50" value={desc} onChange={e => setDesc(e.target.value)} className="w-full accent-emerald-500 h-2" /></L></div>
            <div className="text-xs text-white/40">Total: <span className="text-[#00A8FF] font-bold">{pesoMats.toFixed(1)}g</span> / {pesoTotal}g</div>
          </div>
        </div>

        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-white/40 uppercase tracking-wider flex items-center gap-1.5"><Settings size={12} /> Insumos (parafusos, imãs, pilhas...)</h3>
            <button onClick={() => setIns(p => [...p, { id: String(idC++), nome: '', custo: '0' }])} className="text-xs px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 font-semibold">+ Insumo</button>
          </div>
          <div className="space-y-1.5">
            {ins.map(i => (
              <div key={i.id} className="flex items-center gap-2 p-1.5 rounded-lg bg-[#0F1C2E]/60 border border-white/5">
                <input type="text" value={i.nome} onChange={e => ui(i.id, 'nome', e.target.value)} className={ic + ' flex-1'} placeholder="Ex: Parafuso M3, Imã 10mm..." />
                <div className="w-32 relative"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] text-white/30">R$</span><input type="number" value={i.custo} onChange={e => ui(i.id, 'custo', e.target.value)} className={ic + ' pl-7'} min="0" step="0.01" /></div>
                <button onClick={() => setIns(p => p.filter(x => x.id !== i.id))} className="text-xs text-red-400/50 hover:text-red-400 p-0.5">✕</button>
              </div>
            ))}
          </div>
          {ins.length > 0 && <div className="mt-2 text-xs text-white/40 text-right">Total insumos: <span className="text-white font-semibold">R$ {ins.reduce((a, i) => a + n(i.custo), 0).toFixed(2)}</span></div>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-lg bg-white/5 border border-white/10 p-3">
            <h3 className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider flex items-center gap-1.5"><Zap size={12} /> Energia</h3>
            <div className="space-y-2">
              <L l="Potência da impressora (W)"><input type="number" value={pW} onChange={e => setPW(e.target.value)} className={ic} min="0" /></L>
              <L l="Preço do kWh (R$)"><input type="number" value={pKwh} onChange={e => setPKwh(e.target.value)} className={ic} min="0" step="0.01" /></L>
            </div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3">
            <h3 className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider flex items-center gap-1.5"><Users size={12} /> Mão de Obra</h3>
            <div className="space-y-2">
              <L l="Tempo de trabalho (minutos)"><input type="number" value={mH} onChange={e => setMH(e.target.value)} className={ic} min="0" /></L>
              <L l="Valor da hora de trabalho (R$)"><input type="number" value={mVH} onChange={e => setMVH(e.target.value)} className={ic} min="0" step="0.01" /></L>
            </div>
          </div>
          <div className="rounded-lg bg-white/5 border border-white/10 p-3">
            <h3 className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider flex items-center gap-1.5"><Package size={12} /> Embalagem / Entrega / Ads</h3>
            <div className="space-y-2">
              <L l="Custo da embalagem (R$)"><input type="number" value={eC} onChange={e => setEC(e.target.value)} className={ic} min="0" step="0.01" /></L>
              <L l="Custo de entrega (R$)"><input type="number" value={entC} onChange={e => setEntC(e.target.value)} className={ic} min="0" step="0.01" /></L>
              <L l="Custo de Ads / Publicidade (R$)"><input type="number" value={ads} onChange={e => setAds(e.target.value)} className={ic} min="0" step="0.01" /></L>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-white/5 border border-white/10 p-3">
          <h3 className="text-xs font-bold text-white/40 mb-2 uppercase tracking-wider flex items-center gap-1.5"><FileText size={12} /> Impostos / Taxas / Venda</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <L l="Regime tributário"><select value={reg} onChange={e => setReg(e.target.value)} className={sc}>{taxRegimes.map(r => <option key={r.id} value={r.id}>{r.label}{r.rate > 0 ? ` (${r.rate}%)` : ''}</option>)}<option value="custom">Personalizado</option></select></L>
            {reg === 'custom' && <L l="% Imposto personalizado"><input type="number" value={impC} onChange={e => setImpC(e.target.value)} className={ic} min="0" max="100" step="0.1" /></L>}
            <L l="Marketplace"><select value={mp} onChange={e => setMp(e.target.value)} className={sc}><option value="Shopee">Shopee (20%)</option><option value="Mercado Livre">Mercado Livre (16%)</option><option value="Amazon">Amazon (15%)</option><option value="AliExpress">AliExpress (12%)</option><option value="Etsy">Etsy (10%)</option><option value="Instagram">Instagram (0%)</option><option value="WhatsApp">WhatsApp (0%)</option><option value="Loja Própria">Loja Própria (0%)</option><option value="Custom">Personalizado</option></select></L>
            {mp === 'Custom' && <L l="% Marketplace personalizado"><input type="number" value={mpC} onChange={e => setMpC(e.target.value)} className={ic} min="0" max="100" step="0.1" /></L>}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            <L l="Local da taxa fixa"><input type="text" value={localTax} onChange={e => setLocalTax(e.target.value)} placeholder="Ex: Feirinha, Bazar..." className={ic} /></L>
            <L l="Taxa fixa (R$/un)"><input type="number" value={taxFix} onChange={e => setTaxFix(e.target.value)} className={ic} min="0" step="0.01" /></L>
            <L l="Preço de venda (R$)"><input type="number" value={vVenda} onChange={e => setVVenda(e.target.value)} className={ic} min="0" step="0.01" /></L>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Margem desejada: {margD}%</span>
            <span className="text-xs text-white/40">Preço sugerido: <span className="text-emerald-400 font-bold">R$ {(() => {
              const txMpRate = (mp === 'Custom' ? n(mpC) : ({ 'Shopee': 20, 'Mercado Livre': 16, 'Amazon': 15, 'AliExpress': 12, 'Etsy': 10, 'Instagram': 0, 'WhatsApp': 0, 'Loja Própria': 0 } as any)[mp] || 0) / 100;
              const pImpRate = (reg === 'custom' ? n(impC) : (taxRegimes.find(r => r.id === reg)?.rate || 0)) / 100;
              const matsAtivos = mats.filter(m => m.on);
              let cFil = 0;
              matsAtivos.forEach(m => { cFil += (n(m.peso) / 1000) * n(m.preco); });
              const cDesc = cFil * n(desc) / 100;
              const cEnerg = (n(pW) * (n(tH) + n(tM) / 60) / 1000) * n(pKwh);
              const cIns = ins.reduce((a, i) => a + n(i.custo), 0);
              const cMO = (n(mH) / 60) * n(mVH);
              const cProd = cFil + cDesc + cEnerg + cIns + n(eC) + cMO + n(entC) + n(ads);
              const preco = cProd > 0 ? (cProd * (1 + n(margD) / 100)) / (1 - txMpRate - pImpRate) : 0;
              return preco.toFixed(2);
            })()}</span></span>
          </div>
          <input type="range" min="0" max="90" value={margD} onChange={e => setMargD(e.target.value)} className="w-full accent-emerald-500 h-2" />
          <div className="flex justify-between text-[10px] text-white/20 mt-1"><span>0%</span><span>30%</span><span>60%</span><span>90%</span></div>
        </div>
        <div className="flex justify-center">
          <button onClick={calcular} className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-sm hover:from-emerald-400 hover:to-teal-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
            <Calculator size={16} /> Calcular Custos
          </button>
        </div>
      </div>

      {showR && res && (
        <div className="mt-5 space-y-3 animate-in fade-in duration-300">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="rounded-lg bg-[#0F1C2E]/80 border border-white/10 p-3"><p className="text-[10px] text-white/40">Custo por unidade</p><p className="text-lg font-bold text-white">R$ {res.cProd.toFixed(2)}</p></div>
            <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3"><p className="text-[10px] text-emerald-400/60">Preço de venda</p><p className="text-lg font-bold text-emerald-400">R$ {res.vFinal.toFixed(2)}</p><p className="text-[9px] text-white/30">({n(vVenda) > 0 ? 'manual' : 'pela margem'})</p></div>
            <div className={`rounded-lg p-3 ${res.lucro >= 0 ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-red-500/10 border border-red-500/20'}`}><p className={`text-[10px] ${res.lucro >= 0 ? 'text-emerald-400/60' : 'text-red-400/60'}`}>Lucro Líquido</p><p className={`text-lg font-bold ${res.lucro >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>R$ {res.lucro.toFixed(2)}</p></div>
            <div className="rounded-lg bg-[#0F1C2E]/80 border border-[#00A8FF]/20 p-3"><p className="text-[10px] text-[#00A8FF]/60">Margem de lucro</p><p className="text-lg font-bold text-[#00A8FF]">{res.margem.toFixed(1)}%</p></div>
          </div>

          <div className="rounded-lg bg-[#0F1C2E]/80 border border-white/10 p-4">
            <h3 className="text-xs font-bold text-white/50 mb-3 uppercase tracking-wider">Detalhamento dos custos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
              <div className="flex justify-between"><span className="text-white/40">Filamento:</span><span className="text-white">R$ {res.cFil.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Desperdício:</span><span className="text-white">R$ {res.cDesc.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Energia:</span><span className="text-white">R$ {res.cEnerg.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Insumos:</span><span className="text-white">R$ {res.cIns.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Mão de obra:</span><span className="text-white">R$ {res.cMO.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Embalagem:</span><span className="text-white">R$ {res.cEmbal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Entrega:</span><span className="text-white">R$ {res.cEnt.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Ads/Publicidade:</span><span className="text-white">R$ {res.cAds.toFixed(2)}</span></div>
              <div className="flex justify-between"><span className="text-white/40">Taxa {mp}:</span><span className="text-white">R$ {res.txMpV.toFixed(2)} ({res.txMp}%)</span></div>
              {n(taxFix) > 0 && <div className="flex justify-between"><span className="text-white/40">Taxa fixa ({localTax || 'local'}):</span><span className="text-white">R$ {res.txFix.toFixed(2)}</span></div>}
              <div className="flex justify-between"><span className="text-white/40">Impostos:</span><span className="text-white">R$ {res.cImp.toFixed(2)} ({res.pImp}%)</span></div>
              <div className="flex justify-between"><span className="text-white/40">Custo por grama:</span><span className="text-white">R$ {res.cGram.toFixed(4)}/g</span></div>
              <div className="flex justify-between"><span className="text-white/40">Markup:</span><span className="text-white">{res.markup.toFixed(2)}x</span></div>
            </div>
          </div>

          <div className="flex justify-center">
            <button onClick={gerarPDF} className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-sm hover:from-blue-400 hover:to-indigo-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <Download size={14} /> Gerar Relatório PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculatorTool;
