import { Calculator, Wrench, Target, Megaphone, CircleDot } from 'lucide-react';

interface ToolsNavProps {
  activeTool: string | null;
  setActiveTool: (tool: string | null) => void;
}

const tools = [
  { id: 'calculadora', label: 'Calculadora', icon: Calculator, color: 'from-emerald-500 to-teal-500' },
  { id: 'manutencao', label: 'Manutenção', icon: Wrench, color: 'from-blue-500 to-indigo-500' },
  { id: 'calibracao', label: 'Calibração', icon: Target, color: 'from-purple-500 to-pink-500' },
  { id: 'marketing', label: 'Marketing', icon: Megaphone, color: 'from-orange-500 to-red-500' },
  { id: 'filamentos', label: 'Filamentos', icon: CircleDot, color: 'from-cyan-500 to-blue-500' },
];

const ToolsNav = ({ activeTool, setActiveTool }: ToolsNavProps) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
      {tools.map((tool) => {
        const Icon = tool.icon;
        const isActive = activeTool === tool.id;
        return (
          <button
            key={tool.id}
            onClick={() => setActiveTool(isActive ? null : tool.id)}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
              isActive
                ? `bg-gradient-to-r ${tool.color} text-white shadow-lg scale-105`
                : 'bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:scale-105'
            }`}
          >
            <Icon size={16} />
            {tool.label}
          </button>
        );
      })}
    </div>
  );
};

export default ToolsNav;
