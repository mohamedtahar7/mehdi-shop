import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout" 
import HomePage from "./pages/HomePage"
import { CartContext } from "./contexts/CartContext"
import { useContext,useEffect } from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function App() {
  const {cart,setCart} = useContext(CartContext)
  return (
    <main>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </Router>
    </main>
  )
}

export default App
