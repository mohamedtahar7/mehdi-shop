import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CartProvider from './contexts/CartContext.jsx'
import PageProvider from './contexts/PageContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <PageProvider>
    <CartProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </CartProvider>
  </PageProvider>
  ,
)
