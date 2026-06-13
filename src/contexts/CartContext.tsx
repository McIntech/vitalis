import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { PRODUCTS } from '../data/products'
import { CartContext, type CartContextValue, type CartLineDetail } from './cartContextValue'

type CartLines = Record<string, number>

interface CartProviderProps {
  children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [lines, setLines] = useState<CartLines>({})

  const add = useCallback((sku: string, qty: number = 1) => {
    setLines(prev => {
      const current = prev[sku] ?? 0
      return { ...prev, [sku]: current + qty }
    })
  }, [])

  const setQty = useCallback((sku: string, qty: number) => {
    setLines(prev => {
      if (qty <= 0) {
        const next = { ...prev }
        delete next[sku]
        return next
      }
      return { ...prev, [sku]: qty }
    })
  }, [])

  const remove = useCallback((sku: string) => {
    setLines(prev => {
      const next = { ...prev }
      delete next[sku]
      return next
    })
  }, [])

  const clear = useCallback(() => setLines({}), [])

  const value = useMemo<CartContextValue>(() => {
    const details: CartLineDetail[] = []
    let itemCount = 0
    let subtotalWholesale = 0
    let subtotalRetail = 0

    Object.entries(lines).forEach(([sku, qty]) => {
      const product = PRODUCTS.find(p => p.sku === sku)
      if (!product || qty <= 0) return
      const lineWholesale = product.wholesalePrice * qty
      const lineRetail = product.retailPrice * qty
      details.push({ product, qty, lineWholesale, lineRetail })
      itemCount += qty
      subtotalWholesale += lineWholesale
      subtotalRetail += lineRetail
    })

    const marginAmount = subtotalRetail - subtotalWholesale
    const marginPct = subtotalRetail > 0 ? (marginAmount / subtotalRetail) * 100 : 0

    return {
      lines,
      itemCount,
      uniqueCount: details.length,
      subtotalWholesale,
      subtotalRetail,
      marginAmount,
      marginPct,
      details,
      add,
      setQty,
      remove,
      clear,
    }
  }, [lines, add, setQty, remove, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
