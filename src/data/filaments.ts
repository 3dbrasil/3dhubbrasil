export interface FilamentBrand {
  brand: string;
  type: string;
  dryingTemp: string;
  dryingTime: string;
  nozzleTemp: string;
  bedTemp: string;
  printSpeed: string;
  notes: string;
}

export const filamentData: FilamentBrand[] = [
  // ═══════════════════════════════════════════
  // PLA
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab PLA Basic", type: "PLA", dryingTemp: "55°C", dryingTime: "4-8h", nozzleTemp: "190-230°C", bedTemp: "50-60°C", printSpeed: "50-300mm/s", notes: "Fluxo: 100%. Fácil de imprimir. Baixa deformação." },
  { brand: "Bambu Lab PLA Silk", type: "PLA", dryingTemp: "55°C", dryingTime: "4-8h", nozzleTemp: "200-230°C", bedTemp: "50-60°C", printSpeed: "50-200mm/s", notes: "Acabamento sedoso. Reduza velocidade para melhor brilho." },
  { brand: "Bambu Lab PLA Matte", type: "PLA", dryingTemp: "55°C", dryingTime: "4-8h", nozzleTemp: "190-230°C", bedTemp: "50-60°C", printSpeed: "50-300mm/s", notes: "Acabamento fosco. Não translúcido." },
  { brand: "Bambu Lab PLA Marble", type: "PLA", dryingTemp: "55°C", dryingTime: "4-8h", nozzleTemp: "190-230°C", bedTemp: "50-60°C", printSpeed: "50-300mm/s", notes: "Efeito mármore com partículas." },
  { brand: "Bambu Lab PLA Sparkle", type: "PLA", dryingTemp: "55°C", dryingTime: "4-8h", nozzleTemp: "190-230°C", bedTemp: "50-60°C", printSpeed: "50-300mm/s", notes: "Brilho metálico com glitter." },
  { brand: "Bambu Lab PLA Glow", type: "PLA", dryingTemp: "55°C", dryingTime: "4-8h", nozzleTemp: "190-230°C", bedTemp: "50-60°C", printSpeed: "50-300mm/s", notes: "Luz no escuro. Use bico de aço hardened." },
  { brand: "Prusament PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "215°C", bedTemp: "60°C", printSpeed: "45-100mm/s", notes: "Tolerância ±0.02mm. Excelente consistência. QC por espiral." },
  { brand: "Prusament PLA Blend", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "215°C", bedTemp: "60°C", printSpeed: "45-100mm/s", notes: "Mix de cores Premium. Tolerância ±0.02mm." },
  { brand: "eSUN PLA+", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "205-225°C", bedTemp: "55-65°C", printSpeed: "40-100mm/s", notes: "Mais resistente que PLA comum. ±0.03mm." },
  { brand: "eSUN ePLA-HS", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "205-230°C", bedTemp: "55-65°C", printSpeed: "60-300mm/s", notes: "High-speed PLA. Otimizado para Bambu/Prusa." },
  { brand: "eSUN PLA-LW", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "205-225°C", bedTemp: "55-65°C", printSpeed: "40-100mm/s", notes: "Lightweight PLA com espuma interna. Para RC/aviões." },
  { brand: "Polymaker PolyLite PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "190-230°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "Boa acabamento superficial. ±0.02mm." },
  { brand: "Polymaker PolyLite PLA Pro", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-230°C", bedTemp: "50-60°C", printSpeed: "40-150mm/s", notes: "#1 ranking 2026. Maior resistência ao impacto." },
  { brand: "Polymaker PolyTerra PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "190-230°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "Matte/fosco. Feito com material reciclado. Eco-friendly." },
  { brand: "OVERTURE PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "CCD monitoring em tempo real. ±0.02mm. Fácil first layer." },
  { brand: "OVERTURE PLA Pro", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "200-225°C", bedTemp: "55-65°C", printSpeed: "40-100mm/s", notes: "PLA+ com maior resistência. ±0.02mm." },
  { brand: "Hatchbox PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "Custo-benefício excelente. Benchmark de valor." },
  { brand: "SUNLU PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "190-220°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "Budget. ±0.02mm. Pacotes promocionais." },
  { brand: "SUNLU PLA+", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-225°C", bedTemp: "55-65°C", printSpeed: "40-100mm/s", notes: "PLA+ improved. Boa relação preço/qualidade." },
  { brand: "Elegoo PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-230°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "Boa qualidade a preço acessível." },
  { brand: "Creality PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "Filamento oficial Creality. Bundled com Ender." },
  { brand: "Anycubic PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "Filamento oficial Anycubic. Bundled com Kobra." },
  { brand: "Flashforge PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "Filamento oficial Flashforge." },
  { brand: "Geeetech PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "Budget tier. Funcional em PLA calibrado." },
  { brand: "MatterHackers Build PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "200-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "Store brand MH. Cores consistentes." },
  { brand: "Inland PLA+", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "205-225°C", bedTemp: "55-65°C", printSpeed: "40-100mm/s", notes: "Micro Center. Boa qualidade low-cost." },
  { brand: "ProtoPasta HTPLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-230°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "High-temp PLA. Heat treat para 100°C+." },
  { brand: "ProtoPasta Composite PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-230°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "Metal-filled, carbon, glow. Premium specialty." },
  { brand: "colorFabb PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "EU made. 190 cores RAL. ±0.05mm." },
  { brand: "colorFabb nGen", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "55-65°C", printSpeed: "40-80mm/s", notes: "Co-polyester. Food-safe. Alta resistência." },
  { brand: "colorFabb LW-PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-230°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "Lightweight com espuma. Para RC planes." },
  { brand: "3DFuel Buzzed PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "Made in USA. Specialty filaments." },
  { brand: "Filamentive PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "UK. Eco-friendly, reciclado." },
  { brand: "Fiberlogy PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "Polônia. Cores vibrantes." },
  { brand: "Fillamentum PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "República Tcheca. Cores premium." },
  { brand: "FormFutura PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "Holanda. EcoPLA e specialty." },
  { brand: "3DJAKE PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "EU.ASA Premium quality." },
  { brand: "Recreus FilaFlex PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "Spain. Specialty PLA blends." },
  { brand: "YOUSU PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "China. Budget com boa consistência." },
  { brand: "Iemai PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "China. Tier 3 budget." },
  { brand: "eryone PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "China. Rainbow/brilliant colors." },
  { brand: "BIQU PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "BIGTREETECH brand. Budget." },
  { brand: "Denkiewicz PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "Polônia. Specialty e wood PLA." },
  { brand: "SainSmart PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "USA. Specialty wood, glow, silk." },
  { brand: "3DXTech PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "USA. Premium carbon/kevlar composites." },
  { brand: "Atomic Filament PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "USA. Premium quality, tight tolerance." },
  { brand: "Push Plastic PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "USA. Premium, large spools." },
  { brand: "3D Print Bay PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "USA. Silk, glow, wood, carbon." },
  { brand: "Kimya PLA", type: "PLA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "195-220°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "France. Premium quality." },

  // ═══════════════════════════════════════════
  // PETG
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab PETG Basic", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "230-260°C", bedTemp: "70-85°C", printSpeed: "30-100mm/s", notes: "Resistente a químicos e UV. Fluxo: 95-100%." },
  { brand: "Bambu Lab PETG HF", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "230-260°C", bedTemp: "70-85°C", printSpeed: "50-300mm/s", notes: "High-flow PETG. Otimizado para AMS." },
  { brand: "Prusament PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "250°C", bedTemp: "85°C", printSpeed: "40-80mm/s", notes: "Excelente adesão entre camadas. ±0.02mm." },
  { brand: "eSUN PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "Bom equilíbrio flexibilidade/rigidez. ±0.03mm." },
  { brand: "OVERTURE PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "75-85°C", printSpeed: "30-60mm/s", notes: "Adesão em PEI sem cola. Sem odor forte. ±0.03mm." },
  { brand: "Hatchbox PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "215-240°C", bedTemp: "70-80°C", printSpeed: "30-60mm/s", notes: "Menos stringing que outros PETGs. Boa transparência." },
  { brand: "SUNLU PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-60mm/s", notes: "Budget. ±0.02mm." },
  { brand: "Polymaker PolyLite PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "230-260°C", bedTemp: "70-85°C", printSpeed: "30-100mm/s", notes: "Boa resistência mecânica. ±0.02mm." },
  { brand: "Elegoo PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "Boa qualidade acessível." },
  { brand: "Creality PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "Filamento oficial Creality." },
  { brand: "Anycubic PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "Filamento oficial Anycubic." },
  { brand: "Flashforge PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "Filamento oficial Flashforge." },
  { brand: "Geeetech PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-60mm/s", notes: "Budget tier." },
  { brand: "Inland PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "Micro Center." },
  { brand: "MatterHackers PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "MH Build Series. Good value." },
  { brand: "ProtoPasta PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "230-250°C", bedTemp: "70-85°C", printSpeed: "30-60mm/s", notes: "High-temp PETG. USA made." },
  { brand: "colorFabb PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-85°C", printSpeed: "30-80mm/s", notes: "EU. nGen co-polyester." },
  { brand: "3DFuel PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "USA. Pro HT PETG." },
  { brand: "Fiberlogy PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "Polônia. Easy PETG." },
  { brand: "Fillamentum PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "República Tcheca." },
  { brand: "3DJAKE PETG", type: "PETG", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "220-250°C", bedTemp: "70-80°C", printSpeed: "30-80mm/s", notes: "EU. ecoPETG." },

  // ═══════════════════════════════════════════
  // ABS
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "240-270°C", bedTemp: "90-105°C", printSpeed: "50-300mm/s", notes: "Resistente ao calor. Caixa fechada obrigatória." },
  { brand: "Prusament ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "260°C", bedTemp: "100°C", printSpeed: "40-80mm/s", notes: "Boa para pós-processamento. ±0.02mm." },
  { brand: "eSUN ABS+", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "230-270°C", bedTemp: "90-110°C", printSpeed: "40-80mm/s", notes: "Menos warping que ABS comum. ±0.03mm." },
  { brand: "OVERTURE ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "230-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Low odor formula." },
  { brand: "Hatchbox ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "210-250°C", bedTemp: "80-110°C", printSpeed: "40-60mm/s", notes: "Custo-benefício. Odor forte, use ventilação." },
  { brand: "SUNLU ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Budget. ±0.02mm." },
  { brand: "Polymaker PolyLite ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "240-270°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Menos warping. Acabamento uniforme. ±0.02mm." },
  { brand: "Elegoo ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "230-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Boa qualidade acessível." },
  { brand: "Creality ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Filamento oficial Creality." },
  { brand: "Anycubic ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Filamento oficial Anycubic." },
  { brand: "Flashforge ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Filamento oficial Flashforge." },
  { brand: "Geeetech ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-105°C", printSpeed: "40-60mm/s", notes: "Budget tier." },
  { brand: "Inland ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Micro Center." },
  { brand: "colorFabb ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "230-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "EU. ±0.05mm." },
  { brand: "3DJAKE ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "230-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "EU." },
  { brand: "Fiberlogy ABS", type: "ABS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "230-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Polônia." },

  // ═══════════════════════════════════════════
  // TPU
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab TPU 95A", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-240°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Extrusão direta obrigatória. Velocidade baixa." },
  { brand: "Bambu Lab TPU 95A HF", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-240°C", bedTemp: "50-60°C", printSpeed: "30-100mm/s", notes: "High-flow TPU. Velocidades maiores." },
  { brand: "Prusament TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "230°C", bedTemp: "50°C", printSpeed: "15-25mm/s", notes: "Alta elasticidade. Apenas extrusão direta. ±0.02mm." },
  { brand: "eSUN TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "205-230°C", bedTemp: "45-60°C", printSpeed: "15-30mm/s", notes: "Flexível 95A. Não usar Bowden." },
  { brand: "NinjaTek Cheetah", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "230-260°C", bedTemp: "60-80°C", printSpeed: "30-60mm/s", notes: "TPU rápido. Aceita Bowden." },
  { brand: "NinjaTek Armadillo", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "225-250°C", bedTemp: "60-80°C", printSpeed: "15-30mm/s", notes: "Ultra-rígido. Resistente a abrasão." },
  { brand: "NinjaTek Chinchilla", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-235°C", bedTemp: "50-70°C", printSpeed: "15-30mm/s", notes: "Ultra-flexível 85A." },
  { brand: "OVERTURE TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "205-230°C", bedTemp: "45-60°C", printSpeed: "15-30mm/s", notes: "Flexível. Boa para capas." },
  { brand: "Hatchbox TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-230°C", bedTemp: "45-60°C", printSpeed: "15-30mm/s", notes: "Flexível e durável. Boa para capas." },
  { brand: "SUNLU TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Budget. ±0.03mm." },
  { brand: "Polymaker PolyLite TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-240°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Boa elasticidade. ±0.02mm." },
  { brand: "Elegoo TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Boa qualidade acessível." },
  { brand: "Creality TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Filamento oficial Creality." },
  { brand: "SainSmart TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Flexível 95A. Popular." },
  { brand: "Inland TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Micro Center." },
  { brand: "colorFabb varioShore TPU", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "190-250°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Foaming tech. Varia softness/density." },
  { brand: "3DJAKE flexFill", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "EU. 92A/98A." },
  { brand: "Fiberlogy FLEX", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "210-230°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Polônia. 95A." },
  { brand: "Recreus FilaFlex", type: "TPU", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-240°C", bedTemp: "50-60°C", printSpeed: "15-30mm/s", notes: "Spain. 82A/92A. Ultra-flex." },

  // ═══════════════════════════════════════════
  // ASA
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "240-270°C", bedTemp: "90-105°C", printSpeed: "50-200mm/s", notes: "Caixa fechada. Excelente resistência UV." },
  { brand: "Prusament ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "250°C", bedTemp: "100°C", printSpeed: "40-80mm/s", notes: "Menos odor que ABS. ±0.02mm." },
  { brand: "eSUN ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-110°C", printSpeed: "40-80mm/s", notes: "Resistente UV e intempéries." },
  { brand: "OVERTURE ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Low odor formula." },
  { brand: "Polymaker PolyLite ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-100°C", printSpeed: "40-80mm/s", notes: "Boa estabilidade dimensional. ±0.02mm." },
  { brand: "SUNLU ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Budget. UV resistant." },
  { brand: "Hatchbox ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-105°C", printSpeed: "40-60mm/s", notes: "Budget UV." },
  { brand: "colorFabb ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "EU. LW-ASA lightweight." },
  { brand: "3DJAKE ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "EU." },
  { brand: "Fiberlogy ASA", type: "ASA", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "235-260°C", bedTemp: "90-105°C", printSpeed: "40-80mm/s", notes: "Polônia." },

  // ═══════════════════════════════════════════
  // NYLON/PA
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab PA-CF", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "260-300°C", bedTemp: "80-100°C", printSpeed: "30-80mm/s", notes: "Nylon com fibra de carbono. Bico carbeto." },
  { brand: "Bambu Lab PA6", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "250-290°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "Nylon puro. Higroscópico." },
  { brand: "Prusament PA", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "260-290°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "Alta resistência. Caixa fechada. ±0.02mm." },
  { brand: "eSUN PA Nylon", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "240-280°C", bedTemp: "70-100°C", printSpeed: "30-60mm/s", notes: "Higroscópico. Secar antes de cada uso." },
  { brand: "PolyMaker PA12-CF", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "260-290°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "PA12 com carbono. Estabilidade dimensional." },
  { brand: "colorFabb PA Neat", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "250-280°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "EU. Nylon puro." },
  { brand: "colorFabb PA-CF Low Warp", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "260-290°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "EU. Menos warping." },
  { brand: "3DXTech Nylon", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "250-290°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "USA. PA6, PA12, CF composites." },
  { brand: "ProtoPasta Nylon", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "250-280°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "USA." },
  { brand: "3DJAKE nylonFill", type: "Nylon", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "250-280°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "EU." },

  // ═══════════════════════════════════════════
  // PC (Policarbonato)
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab PC", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "270-310°C", bedTemp: "90-110°C", printSpeed: "30-60mm/s", notes: "Alta resistência. Caixa fechada. Bico hardened." },
  { brand: "Prusament PC Blend", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "280-310°C", bedTemp: "100-120°C", printSpeed: "30-60mm/s", notes: "Resistente a altas temperaturas. ±0.02mm." },
  { brand: "Polymaker PolyLite PC", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "270-300°C", bedTemp: "90-110°C", printSpeed: "30-60mm/s", notes: "Transparente. ±0.02mm." },
  { brand: "eSUN PC", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "270-310°C", bedTemp: "90-110°C", printSpeed: "30-60mm/s", notes: "Alta resistência ao impacto." },
  { brand: "OVERTURE PC", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "270-300°C", bedTemp: "90-110°C", printSpeed: "30-60mm/s", notes: "Boa para peças transparentes." },
  { brand: "Hatchbox PC", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "270-300°C", bedTemp: "90-110°C", printSpeed: "30-60mm/s", notes: "Budget PC." },
  { brand: "3DXTech PC", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "270-310°C", bedTemp: "90-110°C", printSpeed: "30-60mm/s", notes: "USA. PC, PC-ABS, PC-CF." },
  { brand: "Atomic Filament PC", type: "PC", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "270-310°C", bedTemp: "90-110°C", printSpeed: "30-60mm/s", notes: "USA. Premium." },

  // ═══════════════════════════════════════════
  // PVA (suporte solúvel)
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab PVA", type: "PVA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "190-220°C", bedTemp: "50-60°C", printSpeed: "20-40mm/s", notes: "Suporte solúvel em água. Manter seco." },
  { brand: "Prusament PVA", type: "PVA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "210°C", bedTemp: "55°C", printSpeed: "20-35mm/s", notes: "Excelente solubilidade. ±0.02mm." },
  { brand: "eSUN PVA", type: "PVA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "180-210°C", bedTemp: "50-60°C", printSpeed: "20-40mm/s", notes: "Dissolve em água morna." },
  { brand: "Polymaker PVA", type: "PVA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "190-220°C", bedTemp: "50-60°C", printSpeed: "20-40mm/s", notes: "Boa solubilidade." },
  { brand: "Hatchbox PVA", type: "PVA", dryingTemp: "50°C", dryingTime: "4-6h", nozzleTemp: "190-220°C", bedTemp: "50-60°C", printSpeed: "20-40mm/s", notes: "Budget PVA." },

  // ═══════════════════════════════════════════
  // HIPS
  // ═══════════════════════════════════════════
  { brand: "eSUN HIPS", type: "HIPS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-110°C", printSpeed: "40-80mm/s", notes: "Suporte solúvel em limoneno. Comum com ABS." },
  { brand: "Polymaker PolyLite HIPS", type: "HIPS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-110°C", printSpeed: "40-80mm/s", notes: "Dissolve em limoneno." },
  { brand: "Hatchbox HIPS", type: "HIPS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-110°C", printSpeed: "40-60mm/s", notes: "Budget HIPS." },
  { brand: "SUNLU HIPS", type: "HIPS", dryingTemp: "80°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "90-110°C", printSpeed: "40-80mm/s", notes: "Budget." },

  // ═══════════════════════════════════════════
  // PP (Polipropileno)
  // ═══════════════════════════════════════════
  { brand: "eSUN PP", type: "PP", dryingTemp: "70°C", dryingTime: "4-6h", nozzleTemp: "220-260°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "Leve e flexível. Difícil adesão. Use fita PEI." },
  { brand: "Polymaker PolyLite PP", type: "PP", dryingTemp: "70°C", dryingTime: "4-6h", nozzleTemp: "230-260°C", bedTemp: "85-100°C", printSpeed: "30-60mm/s", notes: "Resistente a químicos." },

  // ═══════════════════════════════════════════
  // PLA-CF / PETG-CF / PA-CF
  // ═══════════════════════════════════════════
  { brand: "Bambu Lab PLA-CF", type: "PLA-CF", dryingTemp: "55°C", dryingTime: "4-8h", nozzleTemp: "200-240°C", bedTemp: "50-60°C", printSpeed: "50-300mm/s", notes: "PLA com fibra de carbono. Bico hardened." },
  { brand: "eSUN PLA-CF", type: "PLA-CF", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-230°C", bedTemp: "50-65°C", printSpeed: "40-80mm/s", notes: "Acabamento fosco com textura carbono." },
  { brand: "Polymaker PolyLite PLA-CF", type: "PLA-CF", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-240°C", bedTemp: "50-60°C", printSpeed: "40-100mm/s", notes: "10% fibra carbono. ±0.02mm." },
  { brand: "OVERTURE PLA-CF", type: "PLA-CF", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-230°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "Carbon fiber PLA." },
  { brand: "3DXTech PLA-CF", type: "PLA-CF", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-240°C", bedTemp: "50-60°C", printSpeed: "40-80mm/s", notes: "USA. 30% carbon." },
  { brand: "Bambu Lab PETG-CF", type: "PETG-CF", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "240-270°C", bedTemp: "75-90°C", printSpeed: "40-100mm/s", notes: "PETG reforçado com carbono. Bico hardened." },
  { brand: "eSUN PETG-CF", type: "PETG-CF", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "230-260°C", bedTemp: "70-85°C", printSpeed: "30-80mm/s", notes: "Maior rigidez que PETG comum." },
  { brand: "Polymaker PolyLite PETG-CF", type: "PETG-CF", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "240-270°C", bedTemp: "75-90°C", printSpeed: "30-80mm/s", notes: "±0.02mm." },
  { brand: "3DXTech PETG-CF", type: "PETG-CF", dryingTemp: "65°C", dryingTime: "6-8h", nozzleTemp: "240-270°C", bedTemp: "75-90°C", printSpeed: "30-80mm/s", notes: "USA. 20% carbon." },
  { brand: "Bambu Lab PA6-CF", type: "Nylon-CF", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "260-300°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "Nylon 6 com carbono. Bico carbeto." },
  { brand: "eSUN PA-CF", type: "Nylon-CF", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "250-290°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "Fibra de carbono 20%." },
  { brand: "3DXTech Nylon-CF", type: "Nylon-CF", dryingTemp: "80°C", dryingTime: "8-12h", nozzleTemp: "250-290°C", bedTemp: "80-100°C", printSpeed: "30-60mm/s", notes: "USA. PA6/PA12 com carbono." },
  { brand: "ProtoPasta Carbon Fiber PLA", type: "PLA-CF", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "200-230°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "USA. 15% chopped carbon." },
  { brand: "ProtoPasta Iron-Filled PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "USA. Metal-filled. Pesa como metal." },
  { brand: "ProtoPasta Brass-Filled PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "USA. Metal-filled." },
  { brand: "ProtoPasta Steel-Filled PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "USA. Metal-filled." },
  { brand: "ProtoPasta Copper-Filled PLA", type: "PLA", dryingTemp: "55°C", dryingTime: "4-6h", nozzleTemp: "195-225°C", bedTemp: "50-60°C", printSpeed: "30-60mm/s", notes: "USA. Metal-filled." },

  // ═══════════════════════════════════════════
  // RESINA UV
  // ═══════════════════════════════════════════
  { brand: "Elegoo Standard Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Resina padrão. UV 405nm. Cure: 30-60min UV." },
  { brand: "Elegoo ABS-Like Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Similar ao ABS. Alta resistência." },
  { brand: "Elegoo Plant-Based Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Base vegetal. Menos odor." },
  { brand: "Elegoo Water-Washable Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Lavável com água. Sem álcool." },
  { brand: "Elegoo Mars Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Para Mars series." },
  { brand: "Anycubic Plant-Based Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Base vegetal. Menos odor." },
  { brand: "Anycubic Standard Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Resina padrão." },
  { brand: "Anycubic Eco Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Eco-friendly." },
  { brand: "Siraya Tech Blu", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Flexível e resistente. Peças funcionais." },
  { brand: "Siraya Tech Fast", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Rápido. Boa precisão." },
  { brand: "Siraya Tech Tenacious", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Ultra-flexível. Rubber-like." },
  { brand: "Siraya Tech Sculpt", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Alta precisão. Dental/jewelry." },
  { brand: "Liqcreate Premium Clear", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Transparente premium." },
  { brand: "Liqcreate Flexible-X", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Flexível. Shore 65A." },
  { brand: "3D Materials Bio-Based Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Biológico. Baixo odor." },
  { brand: "Phrozen Aqua-Gray 8K", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "8K resolution. Ultra-detalhe." },
  { brand: "Phrozen Aqua-Blue 8K", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "8K. Engineering resin." },
  { brand: "Yousu Premium Resin", type: "Resina", dryingTemp: "N/A", dryingTime: "N/A", nozzleTemp: "N/A", bedTemp: "N/A", printSpeed: "N/A", notes: "Budget. Good quality." },
];

export const filamentTypes = [
  "Todos", "PLA", "PETG", "ABS", "TPU", "ASA", "Nylon", "PC", "PVA", 
  "PLA-CF", "PETG-CF", "Nylon-CF", "HIPS", "PP", "Resina"
];
