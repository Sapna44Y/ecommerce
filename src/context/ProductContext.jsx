import React, { createContext, useState, useEffect } from "react";
import { fetchProductsByCategory, fetchProducts } from "../services/api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch all products initially
  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFilteredProducts(data); // Initially, show all products
    });
  }, []);

  // Function to filter products by category
  const filterByCategory = async (category) => {
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      const categoryProducts = await fetchProductsByCategory(category);
      setFilteredProducts(categoryProducts);
    }
    setSelectedCategory(category);
  };

  // Function to filter products by search query
  const filterBySearch = (query) => {
    setSearchQuery(query);
    if (query === "") {
      setFilteredProducts(products);
    } else {
      const searchedProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(searchedProducts);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        filteredProducts,
        filterByCategory,
        filterBySearch,
        selectedCategory,
        searchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
