import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const readProducts = async () => {
    const response = await fetch('http://localhost:1337/api/products?populate=thumbnail');
    const data = await response.json();
    setProducts(data.data)
  };

  useEffect(() => {
    readProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};