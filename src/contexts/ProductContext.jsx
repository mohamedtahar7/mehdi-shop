import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { apiLink } from "../utils/apiLink";
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`${apiLink}/products`).then((res) => setProducts(res.data.data));
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
