import { createContext, useState } from "react";
export const CategoryContext = createContext();
const CategoryProvider = ({ children }) => {
  const categories = [
    "Tout",
    "Chaises",
    "Tables",
    "Meubles",
    "Lits",
    "Salons",
    "Banquettes",
  ];
  const [category, setCategory] = useState("Tout");
  return (
    <CategoryContext.Provider
      value={{
        categories,
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
