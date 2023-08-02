import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './contexts/CartContext.jsx'
import PageProvider from './contexts/PageContext.jsx'
import CategoryProvider from './contexts/CategoryContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <CategoryProvider>
  <PageProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </PageProvider>
  </CategoryProvider>
  ,
)
