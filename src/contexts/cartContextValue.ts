import { createContext } from 'react'
import type { Product } from '../data/products'

export interface CartLineDetail {
  product: Product
  qty: number
  lineWholesale: number
  lineRetail: number
}

export interface CartContextValue {
  lines: Record<string, number>
  itemCount: number
  uniqueCount: number
  subtotalWholesale: number
  subtotalRetail: number
  marginAmount: number
  marginPct: number
  details: CartLineDetail[]
  add: (sku: string, qty?: number) => void
  setQty: (sku: string, qty: number) => void
  remove: (sku: string) => void
  clear: () => void
}

export const CartContext = createContext<CartContextValue | null>(null)
