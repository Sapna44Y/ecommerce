import React, { createContext, useState } from "react"; // ✅ Import only once

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]); // Store all products

  // ✅ Add to Cart
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  // ✅ Remove from Cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // ✅ Update Quantity
  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart, // ✅ Updated variable name (previously cartItems)
        addToCart,
        removeFromCart,
        updateQuantity,
        searchQuery,
        setSearchQuery,
        category,
        setCategory,
        products,
        setProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
