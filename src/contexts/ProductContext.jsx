import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { apiLink } from "../utils/apiLink";
export const ProductContext = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(`${apiLink}/products`).then((res) => {
      setLoading(false);
      setProducts(res.data.data);
    });
  }, []);
  return (
    <ProductContext.Provider value={{ products, loading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
