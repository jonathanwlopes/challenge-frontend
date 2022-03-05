import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react"
import { Product } from "../Product/types"
import { parseCookies, setCookie } from "nookies"

interface CartItem {
  productId: number
  productName: string
  imageUrl: string
  quantity: number
}

interface CartContextProviderProps {
  handleBuy: (product: Product) => void
  cartItems: CartItem[]
}

interface CartContextProps {
  children: ReactNode
}

const CartContext = createContext({} as CartContextProviderProps)

export const CartContextProvider = ({ children }: CartContextProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const cookies = parseCookies()

    if (cookies.itemsCart) {
      return JSON.parse(cookies.itemsCart)
    }

    return []
  })

  const prevCartRef = useRef<CartItem[]>()

  useEffect(() => {
    prevCartRef.current = cartItems
  })

  const cartPreviousValue = prevCartRef.current ?? cartItems

  useEffect(() => {
    if (cartPreviousValue !== cartItems) {
      setCookie(undefined, "itemsCart", JSON.stringify(cartItems))
    }
  }, [cartItems, cartPreviousValue])

  const handleBuy = (product: Product) => {
    const updatedCart = [...cartItems]

    const productExists = updatedCart.find((item) => item.productId === product.productId)

    if (productExists) {
      productExists.quantity += 1
    } else {
      const item = {
        productId: product.productId,
        productName: product.productName,
        imageUrl: product.imageUrl,
        quantity: 1,
      }

      updatedCart.push(item)
    }

    setCartItems(updatedCart)
  }

  return <CartContext.Provider value={{ handleBuy, cartItems }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const _context = useContext(CartContext)

  return _context
}
