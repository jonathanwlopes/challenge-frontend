import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../../api"
import { Product, ProductContextProps, ProductContextProviderProps } from "./types"

const ProductContext = createContext({} as ProductContextProviderProps)

export const ProductContextProvider = ({ children }: ProductContextProps) => {
  const [products, setProduct] = useState<Product[]>([])

  const getProducts = async () => {
    await api.get("/products").then((response) => setProduct(response.data))
  }

  useEffect(() => {
    getProducts()
  }, [])

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>
}

export const useProduct = () => {
  const _context = useContext(ProductContext)

  return _context
}
