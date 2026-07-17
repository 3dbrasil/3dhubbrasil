import { useState, useMemo } from 'react';
import { Megaphone, Link2, Calendar, QrCode, Bot, Lightbulb, Clock, ExternalLink, Copy, Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

const platforms = [
  { num: '01', name: 'Instagram', color: 'from-pink-500 to-purple-500' },
  { num: '02', name: 'YouTube', color: 'from-red-500 to-red-600' },
  { num: '03', name: 'TikTok', color: 'from-gray-800 to-gray-900' },
  { num: '04', name: 'Twitter / X', color: 'from-blue-400 to-blue-600' },
  { num: '05', name: 'Facebook', color: 'from-blue-600 to-blue-700' },
  { num: '06', name: 'LinkedIn', color: 'from-blue-500 to-blue-700' },
  { num: '07', name: 'WhatsApp', color: 'from-green-500 to-green-600' },
  { num: '08', name: 'Telegram', color: 'from-blue-400 to-blue-500' },
  { num: '09', name: 'Discord', color: 'from-indigo-500 to-indigo-600' },
  { num: '10', name: 'Pinterest', color: 'from-red-500 to-red-600' },
  { num: '11', name: 'Reddit', color: 'from-orange-500 to-orange-600' },
  { num: '12', name: 'Twitch', color: 'from-purple-500 to-purple-600' },
  { num: '13', name: 'YouTube Shorts', color: 'from-red-400 to-red-500' },
  { num: '14', name: 'Threads', color: 'from-gray-700 to-gray-800' },
  { num: '15', name: 'TikTok Shop', color: 'from-pink-400 to-red-500' },
];

const tips = [
  { title: 'Timelapses são ouro', desc: 'Filme o processo de impressão e acelere. Timelapses são o conteúdo mais compartilhado no nicho 3D.' },
  { title: 'Before/After vende', desc: 'Mostre a peça crua vs acabada. O contraste gera engajamento e demonstra qualidade.' },
  { title: 'Reels e TikTok primeiro', desc: 'Plataformas de vídeo curto têm maior alcance orgânico no nicho de impressão 3D.' },
  { title: 'Hashtags estratégicas', desc: 'Use: #impressao3d #3dprinting #3dhubbrasil #maker #3dprinter #pla #resina #3dmodels' },
  { title: 'Dicas técnicas geram autoridade', desc: 'Compartilhe parâmetros, calibração e dicas de manutenção. Isso gera seguidores fieis.' },
  { title: 'Demonstre o processo', desc: 'Mostre como a peça é projetada, slicada e impressa. O público adora ver o fluxo completo.' },
];

const defaultLinks: Record<string, string> = {};

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();
const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const Marketing = () => {
  const [tab, setTab] = useState<'platforms' | 'links' | 'calendar' | 'qrcode' | 'ai' | 'tips' | 'campaigns'>('platforms');
  const [links, setLinks] = useState<Record<string, string>>(() => {
    try { return JSON.parse(localStorage.getItem('3dhub-marketing-links') || '{}'); } catch { return defaultLinks; }
  });
  const [copied, setCopied] = useState('');
  const [calendarNotes, setCalendarNotes] = useState<Record<string, string>>(() => {
    try { return JSON.parse(localStorage.getItem('3dhub-marketing-calendar') || '{}'); } catch { return {}; }
  });
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResult, setAiResult] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [campaigns, setCampaigns] = useState<Array<{ name: string; start: string; end: string; platform: string }>>(() => {
    try { return JSON.parse(localStorage.getItem('3dhub-marketing-campaigns') || '[]'); } catch { return []; }
  });
  const [newCampaign, setNewCampaign] = useState({ name: '', start: '', end: '', platform: 'Instagram' });
  const [qrText, setQrText] = useState('https://3dhubbrasil.com');

  const tabs = [
    { id: 'platforms' as const, label: 'Plataformas', icon: Megaphone },
    { id: 'links' as const, label: 'Links', icon: Link2 },
    { id: 'calendar' as const, label: 'Calendário', icon: Calendar },
    { id: 'qrcode' as const, label: 'QR Code', icon: QrCode },
    { id: 'ai' as const, label: 'IA', icon: Bot },
    { id: 'tips' as const, label: 'Dicas', icon: Lightbulb },
    { id: 'campaigns' as const, label: 'Campanhas', icon: Clock },
  ];

  const saveLinks = (l: Record<string, string>) => { setLinks(l); localStorage.setItem('3dhub-marketing-links', JSON.stringify(l)); };
  const saveCalendar = (c: Record<string, string>) => { setCalendarNotes(c); localStorage.setItem('3dhub-marketing-calendar', JSON.stringify(c)); };
  const saveCampaigns = (c: typeof campaigns) => { setCampaigns(c); localStorage.setItem('3dhub-marketing-campaigns', JSON.stringify(c)); };

  const copyToClipboard = (text: string, name: string) => {
    navigator.clipboard.writeText(text);
    setCopied(name);
    setTimeout(() => setCopied(''), 2000);
  };

  const calDays = getDaysInMonth(calYear, calMonth);
  const calFirstDay = getFirstDayOfMonth(calYear, calMonth);

  const generateAI = async () => {
    if (!aiPrompt.trim()) return;
    setAiLoading(true);
    setAiResult('');
    try {
      const res = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + (localStorage.getItem('3dhub-gemini-key') || ''), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: `Você é um especialista em marketing digital para impressão 3D no Brasil. Crie conteúdo para: ${aiPrompt}. Use emojis e hashtags apropriadas. Responda em português.` }] }] })
      });
      const data = await res.json();
      setAiResult(data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Erro ao gerar conteúdo.');
    } catch { setAiResult('Erro ao conectar com Gemini. Verifique sua chave de API.'); }
    setAiLoading(false);
  };

  return (
    <div className="bg-[#0a1525]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
      <h2 className="text-xl font-poppins font-bold text-white flex items-center gap-2 mb-4">
        <Megaphone size={20} className="text-orange-400" />
        📢 Marketing
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {tabs.map(t => {
          const Icon = t.icon;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${tab === t.id ? 'bg-[#00A8FF] text-white' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
              <Icon size={13} />
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === 'platforms' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {platforms.map(p => (
            <div key={p.num} className={`bg-gradient-to-br ${p.color} rounded-xl p-4 text-center`}>
              <div className="text-white/60 text-xs font-bold mb-1">{p.num}</div>
              <div className="text-white font-bold text-sm">{p.name}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'links' && (
        <div className="space-y-3">
          <p className="text-xs text-white/40">Adicione URLs para cada plataforma. Use o botão de copiar para compartilhar.</p>
          {platforms.map(p => (
            <div key={p.num} className="flex items-center gap-3">
              <span className="text-xs font-bold text-white/50 w-24 flex-shrink-0">{p.name}</span>
              <input value={links[p.name] || ''} onChange={e => saveLinks({ ...links, [p.name]: e.target.value })}
                placeholder="https://..."
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:border-[#00A8FF]/50 focus:outline-none" />
              {links[p.name] && (
                <button onClick={() => copyToClipboard(links[p.name], p.name)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                  {copied === p.name ? <Check size={14} className="text-green-400" /> : <Copy size={14} className="text-white/40" />}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === 'calendar' && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => { setCalMonth(m => m === 0 ? 11 : m - 1); if (calMonth === 0) setCalYear(y => y - 1); }} className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><ChevronLeft size={16} className="text-white/50" /></button>
            <span className="text-white font-bold">{monthNames[calMonth]} {calYear}</span>
            <button onClick={() => { setCalMonth(m => m === 11 ? 0 : m + 1); if (calMonth === 11) setCalYear(y => y + 1); }} className="p-2 rounded-lg bg-white/5 hover:bg-white/10"><ChevronRight size={16} className="text-white/50" /></button>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(d => (
              <div key={d} className="text-center text-[10px] text-white/30 font-semibold py-1">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: calFirstDay }).map((_, i) => <div key={`e${i}`} />)}
            {Array.from({ length: calDays }).map((_, i) => {
              const day = i + 1;
              const key = `${calYear}-${calMonth}-${day}`;
              const hasNote = !!calendarNotes[key];
              return (
                <button key={day} onClick={() => setSelectedDay(selectedDay === day ? null : day)}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center text-xs transition-all ${selectedDay === day ? 'bg-[#00A8FF] text-white' : hasNote ? 'bg-[#00A8FF]/20 text-[#00A8FF] border border-[#00A8FF]/30' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}>
                  {day}
                  {hasNote && selectedDay !== day && <div className="w-1 h-1 rounded-full bg-[#00A8FF] mt-0.5" />}
                </button>
              );
            })}
          </div>
          {selectedDay && (
            <div className="mt-4 p-4 bg-white/[0.03] rounded-xl border border-white/10">
              <h4 className="text-xs font-bold text-white mb-2">{selectedDay} de {monthNames[calMonth]}</h4>
              <textarea value={calendarNotes[`${calYear}-${calMonth}-${selectedDay}`] || ''} rows={3}
                onChange={e => { const c = { ...calendarNotes, [`${calYear}-${calMonth}-${selectedDay}`]: e.target.value }; saveCalendar(c); }}
                placeholder="Nota para este dia..."
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:border-[#00A8FF]/50 focus:outline-none resize-none" />
            </div>
          )}
        </div>
      )}

      {tab === 'qrcode' && (
        <div className="flex flex-col items-center gap-4">
          <input value={qrText} onChange={e => setQrText(e.target.value)} placeholder="URL ou texto"
            className="w-full max-w-md bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00A8FF]/50 focus:outline-none text-center" />
          {qrText && (
            <div className="bg-white rounded-2xl p-6">
              <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrText)}`} alt="QR Code" className="w-48 h-48" />
            </div>
          )}
          <p className="text-xs text-white/30 text-center">Ideal para cartões de visita, embalagens e vitrines</p>
        </div>
      )}

      {tab === 'ai' && (
        <div className="space-y-4">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3">
            <p className="text-xs text-amber-300">Chave de API do Google Gemini necessária.</p>
            <input value={localStorage.getItem('3dhub-gemini-key') || ''} type="password" placeholder="Cole sua chave de API Gemini..."
              onChange={e => localStorage.setItem('3dhub-gemini-key', e.target.value)}
              className="w-full mt-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:border-amber-500/50 focus:outline-none" />
          </div>
          <textarea value={aiPrompt} onChange={e => setAiPrompt(e.target.value)} rows={3}
            placeholder="Ex: Post para Instagram sobre minha nova peça de resina..."
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#00A8FF]/50 focus:outline-none resize-none" />
          <button onClick={generateAI} disabled={aiLoading}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm disabled:opacity-50 transition-all">
            <Sparkles size={16} />
            {aiLoading ? 'Gerando...' : 'Gerar Conteúdo'}
          </button>
          {aiResult && (
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
              <pre className="text-sm text-white/70 whitespace-pre-wrap font-sans">{aiResult}</pre>
              <button onClick={() => copyToClipboard(aiResult, 'ai')} className="mt-3 text-xs text-[#00A8FF] hover:underline">
                {copied === 'ai' ? 'Copiado!' : 'Copiar conteúdo'}
              </button>
            </div>
          )}
        </div>
      )}

      {tab === 'tips' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {tips.map((t, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
              <h4 className="text-sm font-bold text-white mb-1 flex items-center gap-2">
                <Lightbulb size={14} className="text-amber-400" />
                {t.title}
              </h4>
              <p className="text-xs text-white/40">{t.desc}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'campaigns' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input value={newCampaign.name} onChange={e => setNewCampaign({ ...newCampaign, name: e.target.value })} placeholder="Nome da campanha"
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/20 focus:border-[#00A8FF]/50 focus:outline-none" />
            <select value={newCampaign.platform} onChange={e => setNewCampaign({ ...newCampaign, platform: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00A8FF]/50 focus:outline-none">
              {platforms.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
            </select>
            <input type="date" value={newCampaign.start} onChange={e => setNewCampaign({ ...newCampaign, start: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00A8FF]/50 focus:outline-none" />
            <input type="date" value={newCampaign.end} onChange={e => setNewCampaign({ ...newCampaign, end: e.target.value })}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:border-[#00A8FF]/50 focus:outline-none" />
          </div>
          <button onClick={() => {
            if (newCampaign.name && newCampaign.start && newCampaign.end) {
              saveCampaigns([...campaigns, newCampaign]);
              setNewCampaign({ name: '', start: '', end: '', platform: 'Instagram' });
            }
          }} className="px-4 py-2 rounded-full bg-[#00A8FF] text-white text-xs font-semibold hover:bg-[#00A8FF]/80 transition-colors">
            Adicionar Campanha
          </button>
          <div className="space-y-2">
            {campaigns.map((c, i) => (
              <div key={i} className="flex items-center justify-between bg-white/[0.03] border border-white/5 rounded-xl p-3">
                <div>
                  <span className="text-sm font-semibold text-white">{c.name}</span>
                  <span className="text-xs text-white/30 ml-2">• {c.platform}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-white/40">{c.start} → {c.end}</span>
                  <button onClick={() => saveCampaigns(campaigns.filter((_, j) => j !== i))} className="text-red-400/50 hover:text-red-400 text-xs">✕</button>
                </div>
              </div>
            ))}
            {campaigns.length === 0 && <p className="text-xs text-white/30 text-center py-4">Nenhuma campanha criada ainda.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketing;
