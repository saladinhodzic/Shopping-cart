import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import Outlet from "./pages/Outlet/Outlet";
function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/outlet" element={<Outlet />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
