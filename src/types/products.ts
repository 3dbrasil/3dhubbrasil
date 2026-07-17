export interface Product {
  id: string;
  filamentType: string;
  name: string;
  store: string;
  price: number;
  link: string;
  imageUrl?: string;
  lastUpdated: string;
}

export const FILAMENT_TYPES = [
  'PLA',
  'PLA Fosco',
  'PLA Silk',
  'PETG',
  'ABS',
  'TPU',
  'ASA',
  'PC',
  'Nylon',
  'HIPS',
  'PVA',
  'Outro',
];

export const STORES = [
  'Shopee',
  'Mercado Livre',
  'Amazon',
  'Magalu',
  'AliExpress',
  'Elo7',
  'Outro',
];
