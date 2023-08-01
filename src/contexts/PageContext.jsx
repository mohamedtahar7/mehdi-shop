import { createContext, useState, useEffect } from "react";
export const PageContext = createContext();
const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <PageContext.Provider
      value={{
        currentPage,setCurrentPage
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageProvider;