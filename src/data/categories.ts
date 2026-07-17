export const defaultCategories = [
  {
    id: "modelagem",
    name: "🛠️ Modelagem 3D",
    icon: "fa-cube",
    items: [
      {name:"Blender", link:"https://blender.org", desc:"Open-source completo: modelagem, escultura, animação.", type:"FREE", image:"https://dl.svgcdn.com/logos/blender.png"},
      {name:"FreeCAD", link:"https://freecad.org", desc:"CAD paramétrico open-source para peças mecânicas.", type:"FREE", image:"https://dl.svgcdn.com/png/simple-icons/freecad-800.png"},
      {name:"Tinkercad", link:"https://tinkercad.com", desc:"Modelagem simples no navegador, ideal para iniciantes.", type:"FREE", image:"https://static.cdnlogo.com/logos/t/36/tinkercad.svg"},
      {name:"OpenSCAD", link:"https://openscad.org", desc:"CAD programático — modele escrevendo código.", type:"FREE", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Openscad.svg/256px-Openscad.svg.png"},
      {name:"Wings 3D", link:"https://wings3d.com", desc:"Modelador open-source de subdivisão.", type:"FREE"},
      {name:"SolveSpace", link:"https://solvespace.com", desc:"CAD paramétrico leve e open-source.", type:"FREE"},
      {name:"Parama Craft", link:"https://paramacraft.com", desc:"Modelagem 3D paramétrica no navegador.", type:"FREE"},
      {name:"Fusion 360", link:"https://autodesk.com/products/fusion-360", desc:"CAD/CAM profissional. Grátis para uso pessoal.", type:"FREEMIUM"},
      {name:"Onshape", link:"https://onshape.com", desc:"CAD na nuvem com colaboração em tempo real.", type:"FREEMIUM"},
      {name:"SketchUp", link:"https://app.sketchup.com", desc:"Modelagem 3D intuitiva no navegador.", type:"FREEMIUM"},
      {name:"Sharp3D", link:"https://sharp3d.com", desc:"CAD intuitivo para iPad com Apple Pencil.", type:"FREEMIUM"},
      {name:"Plasticity", link:"https://plasticity.xyz", desc:"CAD com modelagem direta estilo SubD.", type:"FREEMIUM"},
      {name:"Bento3D Tray", link:"https://bento3d.design/tray", desc:"Tray online para organizar e visualizar modelos 3D.", type:"FREE"},
      {name:"Mini Skyline", link:"https://miniskyline.com", desc:"Gerador de paisagens urbanas 3D de alta qualidade.", type:"FREE"},
      {name:"Gridfinity Builder", link:"https://gridfinity.perplexinglabs.com", desc:"Gerador de organizadores paramétricos Gridfinity.", type:"FREE"},
      {name:"Gridfinity Planner", link:"https://gridfinitylayouttool.com", desc:"Planejador de gavetas Gridfinity com gerador de bins.", type:"FREE"},
      {name:"Box STL Generator", link:"https://javisperez.github.io/box-stl-generator/", desc:"Gerador de caixas STL paramétricas para impressão.", type:"FREE"}
    ]
  },
  {
    id: "ia",
    name: "✨ Modelagem com IA",
    icon: "fa-brain",
    items: [
      {name:"Tencent Hunyuan3D", link:"https://3d.hunyuan.tencent.com", desc:"IA GRATUITA: texto/imagem para 3D.", type:"FREE"},
      {name:"TripoSR", link:"https://github.com/VAST-AI-Research/TripoSR", desc:"Open-source: imagem para 3D em <1s.", type:"FREE"},
      {name:"Stable Fast 3D", link:"https://huggingface.co/spaces/stabilityai/stable-fast-3d", desc:"Stability AI: imagem para 3D texturizado.", type:"FREE"},
      {name:"InstantMesh", link:"https://huggingface.co/spaces/TencentARC/InstantMesh", desc:"Tencent ARC: reconstrução 3D de imagens.", type:"FREE"},
      {name:"MakerLab", link:"https://makerworld.com/pt/makerlab", desc:"Laboratório de criação 3D com IA generativa.", type:"FREE"},
      {name:"Smoothie-3D", link:"https://smoothie-3d.com", desc:"Imagens 2D para modelos 3D.", type:"FREE"},
      {name:"Meshy", link:"https://meshy.ai", desc:"Texto/imagem para 3D. Créditos grátis.", type:"FREEMIUM"},
      {name:"Tripo3D", link:"https://tripo3d.ai", desc:"Geração 3D em segundos. Plano grátis.", type:"FREEMIUM"},
      {name:"Luma AI", link:"https://lumalabs.ai", desc:"Modelos 3D de vídeos/fotos. Plano grátis.", type:"FREEMIUM"},
      {name:"Sloyd", link:"https://sloyd.ai", desc:"Gerador 3D com IA. Plano grátis.", type:"FREEMIUM"},
      {name:"Leonardo AI", link:"https://leonardo.ai", desc:"IA generativa com recursos 3D. 150 tokens/dia.", type:"FREEMIUM"},
      {name:"ToolTrace AI", link:"https://tooltrace.ai", desc:"Rastreamento e otimização de ferramentas com IA.", type:"FREE"},
      {name:"BumpMesh", link:"https://bumpmesh.com", desc:"Malhas 3D a partir de mapas bump/normal com IA.", type:"FREE"},
      {name:"img2stl", link:"https://img2stl.art", desc:"Foto para modelo 3D com IA. Créditos a partir de $4.99.", type:"FREEMIUM"},
      {name:"Ritn3D", link:"https://ritn3d.com", desc:"Planta baixa 2D para modelo 3D interativo. 3 renders grátis/mês.", type:"FREEMIUM"},
      {name:"Make It Real", link:"https://makeitreal.eufymake.com", desc:"Plataforma de criação 3D com IA. 3D Paint e CityPrint.", type:"FREE"}
    ]
  },
  {
    id: "slicers",
    name: "☰ Fatiadores (Slicers)",
    icon: "fa-layer-group",
    items: [
      {name:"Cura", link:"https://ultimaker.com/software/ultimaker-cura", desc:"Slicer mais popular, open-source.", type:"FREE", image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Ultimaker_cura.png"},
      {name:"PrusaSlicer", link:"https://prusa3d.com/prusaslicer", desc:"Open-source com suportes orgânicos.", type:"FREE", image:"https://github.com/homarr-labs/dashboard-icons/raw/main/png/prusa-slicer.png"},
      {name:"OrcaSlicer", link:"https://github.com/SoftFever/OrcaSlicer", desc:"Fork do Bambu Studio. Open-source.", type:"FREE"},
      {name:"Bambu Studio", link:"https://bambulab.com/en/bambu-studio", desc:"Slicer oficial da Bambu Lab.", type:"FREE"},
      {name:"SuperSlicer", link:"https://github.com/supermerill/SuperSlicer", desc:"PrusaSlicer com features extras.", type:"FREE"},
      {name:"IdeaMaker", link:"https://raise3d.com/ideamaker", desc:"Slicer gratuito da Raise3D.", type:"FREE"},
      {name:"Creality Print", link:"https://creality.com/pages/download", desc:"Slicer oficial da Creality.", type:"FREE"},
      {name:"Kiri:Moto", link:"https://grid.space/kiri", desc:"Slicer online no navegador.", type:"FREE"},
      {name:"ChiTuBox", link:"https://chitubox.com", desc:"Slicer para resina/DLP. Versão grátis.", type:"FREEMIUM"},
      {name:"Lychee Slicer", link:"https://mango3d.io/lychee-slicer", desc:"Slicer para resina. Plano grátis.", type:"FREEMIUM"}
    ]
  },
  {
    id: "lojas",
    name: "🏪 Onde Vender",
    icon: "fa-store",
    isLinkList: true,
    items: [
      {name:"Mercado Livre", link:"https://www.mercadolivre.com.br/anuncie", desc:"Maior marketplace BR. Comissão 10–19% (Clássico 10–14%, Premium 15–19%) + R$6 por item abaixo de R$79. Envio Full disponível."},
      {name:"Amazon BR", link:"https://sellercentral.amazon.com.br", desc:"Alcance clientes em todo o Brasil. Comissão 8–15% + R$2/item (Individual) ou R$19/mês (Profissional). FBA opcional."},
      {name:"Shopee", link:"https://seller.shopee.com.br", desc:"Comissão 14–20% por faixa de preço + R$4–26/item. Sem mensalidade. Boa base de compradores."},
      {name:"Magalu", link:"https://www.magazineluiza.com.br/parceiro", desc:"Comissão 10–20% por categoria. Promoções: até 50% off para novos sellers. Envio Magalu disponível."},
      {name:"TikTok Shop", link:"https://seller-br.tiktok.com", desc:"Comissão 6–10% + R$4–6/item. Sem mensalidade. Isenção de taxa por 60 dias para novos sellers."},
      {name:"Etsy", link:"https://www.etsy.com/sell", desc:"Marketplace global para artesanato. US$0.20/listing + 6.5% transação + 3%+$0.25 processamento. 15% Offsite Ads."},
      {name:"Enjoei", link:"https://www.enjoei.com.br", desc:"Marketplace de produtos usados/novos. Comissão ~12–18%. Frete grátis até 1kg. Peças únicas e colecionáveis."},
      {name:"Nuvemshop", link:"https://www.nuvemshop.com.br", desc:"Crie sua loja própria. Sem comissão por venda. Planos grátis a R$449/mês + taxas do gateway de pagamento."},
      {name:"Tray", link:"https://www.tray.com.br", desc:"E-commerce self-service. Planos R$19–299/mês. Sem comissão por venda usando gateway próprio."}
    ]
  },
  {
    id: "stls",
    name: "📦 STLs Grátis",
    icon: "fa-download",
    items: [
      {name:"Thingiverse", link:"https://thingiverse.com", desc:"Maior comunidade de modelos 3D gratuitos.", type:"FREE", image:"https://upload.wikimedia.org/wikipedia/commons/9/9b/Thingiverse_Logo_192x192.png"},
      {name:"Printables", link:"https://printables.com", desc:"Prusa: modelos de alta qualidade.", type:"FREE"},
      {name:"Thangs", link:"https://thangs.com", desc:"Busca inteligente por geometria 3D.", type:"FREE"},
      {name:"MakerWorld", link:"https://makerworld.com", desc:"Bambu Lab: modelos e perfis.", type:"FREE"},
      {name:"Yeggi", link:"https://yeggi.com", desc:"Buscador de modelos em dezenas de repositórios.", type:"FREE"},
      {name:"STL Finder", link:"https://stlfinder.com", desc:"Busca de modelos em múltiplos sites.", type:"FREE"},
      {name:"NIH 3D Print", link:"https://3dprint.nih.gov", desc:"Repositório científico.", type:"FREE"},
      {name:"GrabCAD", link:"https://grabcad.com/library", desc:"Modelos CAD e projetos mecânicos.", type:"FREE"},
      {name:"Cults3D", link:"https://cults3d.com", desc:"Modelos gratuitos e pagos.", type:"FREEMIUM"},
      {name:"MyMiniFactory", link:"https://myminifactory.com", desc:"Miniaturas tabletop curadas.", type:"FREEMIUM"},
      {name:"CGTrader", link:"https://cgtrader.com", desc:"2M+ modelos 3D, muitos grátis.", type:"FREEMIUM"},
      {name:"Sketchfab", link:"https://sketchfab.com", desc:"Viewer WebGL e downloads grátis.", type:"FREEMIUM"},
      {name:"MakerOnline", link:"https://makeronline.com", desc:"Modelos 3D gratuitos para impressão imediata.", type:"FREE"},
      {name:"MakeRoad", link:"https://makeroad.com", desc:"Comunidade maker global com modelos, concursos e IA.", type:"FREE"},
      {name:"Nexprint", link:"https://nexprint.com", desc:"Hub de modelos 3D com Fundo de $1M para criadores.", type:"FREE"},
      {name:"Creality Cloud", link:"https://crealitycloud.com", desc:"Nuvem da Creality: modelos, slice e impressão remota.", type:"FREE"}
    ]
  },
  {
    id: "stls-independentes",
    name: "🌍 STLs Independentes",
    icon: "fa-globe",
    items: [
      {name:"3D Kitbash", link:"https://3dkitbash.com", desc:"Modelos premium 3D-printable de brinquedos e peças.", type:"FREEMIUM"},
      {name:"3D Via", link:"https://www.3dvia.com", desc:"Plataforma de compartilhamento de modelos 3D.", type:"FREE"},
      {name:"Astroprint", link:"https://www.astroprint.com", desc:"Cloud printing e biblioteca de modelos.", type:"FREEMIUM"},
      {name:"Free3D", link:"https://free3d.com", desc:"Modelos 3D gratuitos e premium para download.", type:"FREEMIUM"},
      {name:"MakerRepo", link:"https://makerrepo.com", desc:"Plataforma git-based para compartilhar modelos CAD paramétricos.", type:"FREE"},
      {name:"Pinshape", link:"https://pinshape.com", desc:"Encontre, compartilhe e venda arquivos de impressão 3D.", type:"FREEMIUM"},
      {name:"PrintPal", link:"https://printpal.io", desc:"Marketplace + modelos + IA + manufatura sob demanda.", type:"FREEMIUM"},
      {name:"Redpah", link:"https://www.redpah.com", desc:"Repositório de modelos 3D gratuitos.", type:"FREE"},
      {name:"Sculpteo", link:"https://www.sculpteo.com", desc:"Impressão 3D sob demanda e biblioteca de modelos.", type:"FREEMIUM"},
      {name:"Shapeways", link:"https://www.shapeways.com", desc:"Marketplace e manufatura 3D profissional.", type:"FREEMIUM"},
      {name:"TurboSquid", link:"https://www.turbosquid.com", desc:"Maior marketplace de modelos 3D profissionais.", type:"FREEMIUM"},
      {name:"YouMagine", link:"https://youmagine.com", desc:"Comunidade para criadores RC e makers.", type:"FREE"}
    ]
  },
  {
    id: "utilitarios",
    name: "🔧 Utilitários",
    icon: "fa-tools",
    items: [
      {name:"Meshmixer", link:"https://meshmixer.com", desc:"Edição de malhas e suportes.", type:"FREE"},
      {name:"MeshLab", link:"https://meshlab.net", desc:"Limpeza de malhas open-source.", type:"FREE"},
      {name:"3D Viewer", link:"https://3dviewer.net", desc:"Visualizador STL/OBJ online.", type:"FREE"},
      {name:"UVtools", link:"https://github.com/sn4k3/UVtools", desc:"Validação de arquivos de resina.", type:"FREE"},
      {name:"Netfabb", link:"https://autodesk.com/products/netfabb", desc:"Reparo profissional. Versão grátis.", type:"FREEMIUM"},
      {name:"Convertio", link:"https://convertio.co", desc:"Conversor universal: STL, OBJ, STEP, 3MF e mais.", type:"FREEMIUM"},
      {name:"CloudConvert 3D", link:"https://cloudconvert.com/3d-converter", desc:"Conversor online de formatos 3D com alta qualidade.", type:"FREEMIUM"},
      {name:"AnyConv 3D", link:"https://anyconv.com/pt/conversao-3d", desc:"Conversor de modelos 3D simples e rápido.", type:"FREE"},
      {name:"QR Code to STL", link:"https://qrcode2stl.printer.tools", desc:"Converta QR codes em modelos STL 3D imprimíveis.", type:"FREE"},
      {name:"Formware STL Repair", link:"https://formware.co/onlinestlrepair", desc:"Reparo online de arquivos STL corrompidos.", type:"FREE"},
      {name:"3DPE Calc", link:"https://3dprintingcosts.com", desc:"Calculadora completa FDM e resina.", type:"FREE"},
      {name:"PrintPal Calc", link:"https://printpal.io/tools/3d-print-cost-calculator", desc:"Calculadora com filamento, eletricidade e depreciação.", type:"FREE"},
      {name:"OmniCalc 3D", link:"https://omnicalculator.com/other/3d-printing", desc:"Calculadora completa para orçamento profissional.", type:"FREE"},
      {name:"3D PrintForce", link:"https://3dprintforce.com/3d-printing-calculator", desc:"Calculadora com lucro, taxas e falhas.", type:"FREE"},
      {name:"GCodex", link:"https://gcodex.tech", desc:"Visualizador e analisador de G-Code online. CNC e FDM.", type:"FREE"},
      {name:"Polyvia3D", link:"https://polyvia3d.com", desc:"82 ferramentas: converter, visualizar, reparar 3D. 100% grátis.", type:"FREE"}
    ]
  },
  {
    id: "github",
    name: "🐙 GitHub & Projetos",
    icon: "fa-code",
    items: [
      {name:"Awesome 3D Printing", link:"https://github.com/ad-si/awesome-3d-printing", desc:"Catálogo completo de recursos 3D open-source.", type:"FREE"},
      {name:"Awesome OpenSCAD", link:"https://github.com/opensecad/awesome-opensecad", desc:"Catálogo de recursos OpenSCAD.", type:"FREE"},
      {name:"3D Printing Cheat Sheet", link:"https://github.com/3dprintingchek/3d-printing-cheat-sheet", desc:"Guia rápido de configurações.", type:"FREE"},
      {name:"Voron Design", link:"https://github.com/VoronDesign", desc:"Projetos de impressoras coreXY open-source.", type:"FREE"},
      {name:"EVA3D", link:"https://github.com/EVA-3D", desc:"Toolhead universal open-source.", type:"FREE"},
      {name:"3DMRP", link:"https://github.com/MKloberg/3drmp", desc:"ERP: pedidos, fila de impressão, estoque.", type:"FREE"},
      {name:"Manyfold", link:"https://github.com/manyfold3d/manyfold", desc:"Gerenciador de biblioteca 3D self-hosted.", type:"FREE"},
      {name:"printBed", link:"https://github.com/prosthetichead/printBed", desc:"Gestão de assets 3D: classifique e organize.", type:"FREE"}
    ]
  },
  {
    id: "gestao",
    name: "📊 Gestão & Monitoramento",
    icon: "fa-chart-line",
    items: [
      {name:"OctoPrint", link:"https://octoprint.org", desc:"Controle remoto open-source.", type:"FREE", image:"https://github.com/homarr-labs/dashboard-icons/raw/main/png/octoprint.png"},
      {name:"Mainsail", link:"https://docs.mainsail.xyz", desc:"Interface moderna para Klipper.", type:"FREE"},
      {name:"Fluidd", link:"https://docs.fluidd.xyz", desc:"Interface leve para Klipper.", type:"FREE"},
      {name:"Klipper", link:"https://klipper3d.org", desc:"Firmware avançado de alta velocidade.", type:"FREE", image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Klipper-logo_svg.svg/512px-Klipper-logo_svg.svg.png"},
      {name:"Marlin", link:"https://marlinfw.org", desc:"Firmware open-source mais usado.", type:"FREE"},
      {name:"Spoolman", link:"https://github.com/Donkie/Spoolman", desc:"Gerenciador de filamentos.", type:"FREE"},
      {name:"Obico", link:"https://obico.io", desc:"Monitoramento com IA. Plano grátis.", type:"FREE"},
      {name:"SimplyPrint", link:"https://simplyprint.io", desc:"Cloud printing. Plano grátis.", type:"FREE"},
      {name:"OctoEverywhere", link:"https://octoeverywhere.com", desc:"Acesso remoto + detecção de falhas com IA. Grátis (3 impressoras).", type:"FREEMIUM"}
    ]
  }
];

export default defaultCategories;
