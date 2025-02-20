import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);
  const { filterBySearch, searchQuery, selectedCategory, filterByCategory } =
    useContext(ProductContext);

  // ✅ Get Total Items in Cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearchChange = (e) => {
    filterBySearch(e.target.value);
    navigate("/"); // Ensure to navigate to Home
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  const handleCategoryChange = (e) => {
    filterByCategory(e.target.value);
    navigate("/"); // Ensure to navigate to Home
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return (
    <header className="bg-[#FFC72C] text-black py-4 px-6 shadow-lg fixed top-0 left-0 w-full z-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          🛒 My E-Commerce
        </h1>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="px-3 py-2 rounded-lg text-gray-900 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 border border-gray-300"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="bg-white text-gray-900 px-3 py-2 rounded-lg border border-gray-300 transition-all duration-300 ease-in-out hover:bg-yellow-100 hover:border-blue-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        {/* Cart Icon with Item Count */}
        <button
          onClick={() => navigate("/cart")}
          className="relative flex items-center px-4 py-2"
        >
          <FaShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
