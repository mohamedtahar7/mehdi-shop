import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./contexts/CartContext.jsx";
import PageProvider from "./contexts/PageContext.jsx";
import CategoryProvider from "./contexts/CategoryContext.jsx";
import LoginProvider from "./contexts/LoginContext.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <LoginProvider>
      <CategoryProvider>
        <PageProvider>
          <CartProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </CartProvider>
        </PageProvider>
      </CategoryProvider>
    </LoginProvider>
  </ProductProvider>
);
