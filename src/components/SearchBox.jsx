import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBox = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Error fetching categories:", err));
  }, []);

  return (
    <select
      className="p-2 rounded-md text-black bg-white border border-gray-300 shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:shadow-xl hover:bg-gray-100"
      onChange={(e) => onCategorySelect(e.target.value)}
    >
      <option value="">All Products</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default SearchBox;
