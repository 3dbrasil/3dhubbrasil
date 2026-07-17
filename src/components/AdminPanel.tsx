import { useState } from 'react';
import { Product, FILAMENT_TYPES, STORES } from '../types/products';
import { Plus, Trash2, Save, X, Lock, LogOut, Pencil, ExternalLink, Package } from 'lucide-react';

interface AdminPanelProps {
  isAdmin: boolean;
  products: Product[];
  login: (pass: string) => boolean;
  logout: () => void;
  addProduct: (p: Omit<Product, 'id' | 'lastUpdated'>) => void;
  updateProduct: (id: string, changes: Partial<Product>) => void;
  removeProduct: (id: string) => void;
}

const emptyForm = {
  filamentType: 'PLA',
  name: '',
  store: 'Shopee',
  price: '',
  link: '',
};

const AdminPanel = ({
  isAdmin,
  products,
  login,
  logout,
  addProduct,
  updateProduct,
  removeProduct,
}: AdminPanelProps) => {
  const [show, setShow] = useState(false);
  const [passInput, setPassInput] = useState('');
  const [passError, setPassError] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  if (!show) {
    return (
      <button
        onClick={() => setShow(true)}
        className="fixed bottom-6 right-20 z-50 flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#0F1C2E] border border-white/10 text-white/30 hover:text-white/60 hover:bg-white/10 transition-all text-[10px] font-semibold"
      >
        <Package size={12} />
        Admin Precos
      </button>
    );
  }

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-[#060D18] border border-white/10 rounded-2xl p-6 w-full max-w-sm">
          <div className="flex items-center gap-2 mb-4">
            <Lock size={18} className="text-amber-400" />
            <h3 className="font-poppins font-bold text-white">Painel Admin</h3>
            <button onClick={() => { setShow(false); setPassError(false); }} className="ml-auto text-white/30 hover:text-white">
              <X size={16} />
            </button>
          </div>
          <input
            type="password"
            value={passInput}
            onChange={(e) => { setPassInput(e.target.value); setPassError(false); }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (login(passInput)) {
                  setPassInput('');
                } else {
                  setPassError(true);
                }
              }
            }}
            placeholder="Senha padrao: admin"
            className="w-full bg-[#0F1C2E] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#00A8FF] transition-colors placeholder:text-muted-foreground/50 mb-3"
          />
          {passError && <p className="text-xs text-red-400 mb-3">Senha incorreta</p>}
          <button
            onClick={() => {
              if (login(passInput)) {
                setPassInput('');
              } else {
                setPassError(true);
              }
            }}
            className="w-full py-2.5 rounded-lg bg-[#00A8FF] text-white font-semibold text-sm hover:bg-[#00A8FF]/80 transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = () => {
    if (!form.name.trim() || !form.price) return;
    const priceNum = parseFloat(String(form.price).replace(',', '.'));
    if (isNaN(priceNum) || priceNum <= 0) return;

    if (editingId) {
      updateProduct(editingId, {
        filamentType: form.filamentType,
        name: form.name.trim(),
        store: form.store,
        price: priceNum,
        link: form.link.trim(),
      });
    } else {
      addProduct({
        filamentType: form.filamentType,
        name: form.name.trim(),
        store: form.store,
        price: priceNum,
        link: form.link.trim(),
      });
    }
    setForm(emptyForm);
    setEditingId(null);
  };

  const startEdit = (p: Product) => {
    setEditingId(p.id);
    setForm({
      filamentType: p.filamentType,
      name: p.name,
      store: p.store,
      price: String(p.price),
      link: p.link,
    });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setForm(emptyForm);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto">
      <div className="bg-[#060D18] border border-white/10 rounded-2xl w-full max-w-3xl my-8">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10">
          <Package size={18} className="text-emerald-400" />
          <h3 className="font-poppins font-bold text-white">Painel de Precos</h3>
          <span className="text-xs text-muted-foreground ml-2">{products.length} produtos</span>
          <div className="flex-1" />
          <button onClick={logout} className="flex items-center gap-1 text-[10px] text-white/40 hover:text-white transition-colors">
            <LogOut size={10} /> Sair
          </button>
          <button onClick={() => { setShow(false); cancelEdit(); }} className="text-white/30 hover:text-white ml-2">
            <X size={16} />
          </button>
        </div>

        <div className="p-5 border-b border-white/10 bg-white/[0.02]">
          <p className="text-[10px] text-muted-foreground mb-3 font-semibold uppercase tracking-wider">
            {editingId ? 'Editando produto' : 'Adicionar produto'}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
            <select
              value={form.filamentType}
              onChange={(e) => setForm({ ...form, filamentType: e.target.value })}
              className="bg-[#0F1C2E] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
            >
              {FILAMENT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select
              value={form.store}
              onChange={(e) => setForm({ ...form, store: e.target.value })}
              className="bg-[#0F1C2E] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00A8FF]"
            >
              {STORES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nome do produto"
              className="bg-[#0F1C2E] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00A8FF] placeholder:text-muted-foreground/50"
            />
            <input
              type="text"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              placeholder="Preco R$"
              className="bg-[#0F1C2E] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00A8FF] placeholder:text-muted-foreground/50"
            />
          </div>
          <div className="flex gap-2">
            <input
              type="url"
              value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })}
              placeholder="Link do produto (URL da loja)"
              className="flex-1 bg-[#0F1C2E] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00A8FF] placeholder:text-muted-foreground/50"
            />
            <button
              onClick={handleSubmit}
              disabled={!form.name.trim() || !form.price}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-semibold text-xs hover:bg-emerald-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Save size={12} />
              {editingId ? 'Salvar' : 'Adicionar'}
            </button>
            {editingId && (
              <button
                onClick={cancelEdit}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/50 font-semibold text-xs hover:bg-white/10 transition-colors"
              >
                <X size={12} />
                Cancelar
              </button>
            )}
          </div>
        </div>

        <div className="p-5 max-h-[50vh] overflow-y-auto">
          {products.length === 0 ? (
            <p className="text-center text-muted-foreground text-xs py-8">Nenhum produto cadastrado</p>
          ) : (
            <div className="space-y-1">
              {products
                .sort((a, b) => a.price - b.price)
                .map((p) => (
                  <div
                    key={p.id}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors group"
                  >
                    <span className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded flex-shrink-0 min-w-[60px] text-center">
                      R$ {p.price.toFixed(2)}
                    </span>
                    <span className="text-[9px] font-semibold text-[#00A8FF] bg-[#00A8FF]/10 px-1.5 py-0.5 rounded flex-shrink-0">
                      {p.filamentType}
                    </span>
                    <span className="text-[9px] text-white/50 flex-shrink-0">
                      {p.store}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] text-white/70 line-clamp-1">{p.name}</p>
                    </div>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#00A8FF] transition-colors flex-shrink-0">
                        <ExternalLink size={10} />
                      </a>
                    )}
                    <button onClick={() => startEdit(p)} className="text-white/20 hover:text-amber-400 transition-colors flex-shrink-0">
                      <Pencil size={10} />
                    </button>
                    <button onClick={() => removeProduct(p.id)} className="text-white/20 hover:text-red-400 transition-colors flex-shrink-0">
                      <Trash2 size={10} />
                    </button>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
