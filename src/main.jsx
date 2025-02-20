import "./index.css"; // ✅ Import Tailwind styles
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext"; // ✅ Import CartProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* ✅ Wrap App inside CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
