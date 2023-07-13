import Header from "./components/HomeHeader"
import ProductDetails from "./pages/ProductDetails"
import HomePage from "./pages/HomePage"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Footer from "./components/Footer"
function App() {

  return (
    <main>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Footer/> 
      </Router>
    </main>
  )
}

export default App
