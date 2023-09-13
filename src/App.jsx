import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminProducts from "./pages/AdminProducts";
import AddProduct from "./pages/AddProduct";
import DeleteProduct from "./pages/DeleteProduct";
import EditProduct from "./pages/EditProduct";
function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/products" element={<AdminProducts />} />
          <Route path="/admin/add" element={<AddProduct />} />
          <Route path="/admin/edit/:id" element={<EditProduct />} />
          <Route path="/admin/delete/:id" element={<DeleteProduct />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
