import { ReactNode } from "react"

export interface ProductContextProps {
  children: ReactNode
}
export interface ProductContextProviderProps {
  products: Product[]
}

export interface Product {
  productId: number
  productName: string
  stars: number
  imageUrl: string
  listPrice: number
  price: number
  formattedListPrice?: string
  formattedPrice?: string
  installments: {
    quantity: number
    value: number | string
  }[]
}
