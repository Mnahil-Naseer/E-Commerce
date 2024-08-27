import React, { createContext, useState, useEffect } from "react";
import { AccessoriesProducts } from "../components/Accessories";
import { Womenproducts } from "../components/Women";
import { Menproducts } from "../components/Men";
import { Homeproducts } from "../components/HomeAppliances";
import { Decorationproducts } from "../components/Dacoration";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const allProducts = [...AccessoriesProducts, ...Womenproducts, ...Menproducts, ...Homeproducts, ...Decorationproducts];
    setProducts(allProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
