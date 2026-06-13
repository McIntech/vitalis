export type ProductColor = 'primary' | 'teal' | 'coral' | 'violet' | 'accent'
export type ProductIcon = 'pill' | 'capsule' | 'tablet' | 'bottle' | 'blister'
export type ProductStock = 'in' | 'low'

export interface Product {
  sku: string
  name: string
  brand: string
  category: string
  presentation: string
  description: string
  wholesalePrice: number
  retailPrice: number
  minQty: number
  stock: ProductStock
  stockLabel: string
  color: ProductColor
  icon: ProductIcon
}

export const PRODUCTS: readonly Product[] = [
  {
    sku: 'PAR-500-T20',
    name: 'Paracetamol 500 mg',
    brand: 'Tafirol GI',
    category: 'Genérico GI · Analgésico',
    presentation: 'Caja c/20 tabletas',
    description: 'Bioequivalente certificado COFEPRIS. Alta rotación de mostrador, top 3 nacional.',
    wholesalePrice: 18.5,
    retailPrice: 42.0,
    minQty: 12,
    stock: 'in',
    stockLabel: '+2,400 cajas en CEDIS',
    color: 'primary',
    icon: 'tablet',
  },
  {
    sku: 'AMO-500-C12',
    name: 'Amoxicilina 500 mg',
    brand: 'Amoxil GI',
    category: 'Genérico GI · Antibiótico',
    presentation: 'Caja c/12 cápsulas',
    description: 'Antibiótico beta-lactámico de amplio espectro. Receta médica requerida.',
    wholesalePrice: 42.8,
    retailPrice: 98.0,
    minQty: 6,
    stock: 'in',
    stockLabel: '+1,800 cajas en CEDIS',
    color: 'teal',
    icon: 'capsule',
  },
  {
    sku: 'OME-20-C14',
    name: 'Omeprazol 20 mg',
    brand: 'Losec GI',
    category: 'Genérico GI · Gastro',
    presentation: 'Caja c/14 cápsulas',
    description: 'Inhibidor de bomba de protones. Rotación constante todo el año.',
    wholesalePrice: 35.0,
    retailPrice: 89.0,
    minQty: 10,
    stock: 'in',
    stockLabel: '+3,100 cajas en CEDIS',
    color: 'coral',
    icon: 'capsule',
  },
  {
    sku: 'LOS-50-T30',
    name: 'Losartán 50 mg',
    brand: 'Cozaar® Patente',
    category: 'Patente · Cardiovascular',
    presentation: 'Caja c/30 tabletas',
    description: 'Antihipertensivo ARA II. Marca original MSD, lote vigente 18 meses.',
    wholesalePrice: 158.0,
    retailPrice: 320.0,
    minQty: 4,
    stock: 'low',
    stockLabel: 'Quedan 320 cajas',
    color: 'violet',
    icon: 'pill',
  },
  {
    sku: 'MET-850-T30',
    name: 'Metformina 850 mg',
    brand: 'Glucophage GI',
    category: 'Genérico GI · Metabólico',
    presentation: 'Caja c/30 tabletas',
    description: 'Primera línea para diabetes tipo 2. Mercado en crecimiento +9% anual.',
    wholesalePrice: 48.0,
    retailPrice: 115.0,
    minQty: 6,
    stock: 'in',
    stockLabel: '+1,500 cajas en CEDIS',
    color: 'accent',
    icon: 'tablet',
  },
] as const
