import ProductDetails from "./pages/ProductDetails"
import Checkout from "./pages/Checkout" 
import HomePage from "./pages/HomePage"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
function App() {
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
