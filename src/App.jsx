import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import BuyPage from "./pages/BuyPage";
import OrderBuy from "./pages/OrderBuy";
import Top from "./components/Top";
import ShopPage from "./pages/ShopPage"; // ✅ Import ShopPage
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} /> {/* ✅ Home Page */}
            <Route path="/shop" element={<ShopPage />} /> {/* ✅ Shop Page */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/orderBuy" element={<OrderBuy />} />
          </Routes>
          <Footer />
        </Router>
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
