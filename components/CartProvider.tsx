'use client'

import { createContext, useContext, useMemo, useState } from 'react'

export type CartItem = {
  id: string
  name: string
  price: number
  priceLabel: string
  image: string
  quantity: number
}

type Product = Omit<CartItem, 'quantity'>

type CartContextValue = {
  items: CartItem[]
  count: number
  total: number
  isOpen: boolean
  addItem: (product: Product) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  function addItem(product: Product) {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...current, { ...product, quantity: 1 }]
    })

    setIsOpen(true)
  }

  function removeItem(id: string) {
    setItems((current) => current.filter((item) => item.id !== id))
  }

  function updateQuantity(id: string, quantity: number) {
    if (quantity < 1) {
      removeItem(id)
      return
    }

    setItems((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity } : item))
    )
  }

  const value = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0)
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )

    return {
      items,
      count,
      total,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      openCart: () => setIsOpen(true),
      closeCart: () => setIsOpen(false),
    }
  }, [items, isOpen])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
