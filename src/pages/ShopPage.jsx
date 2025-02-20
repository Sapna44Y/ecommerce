import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const ShopPage = () => {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Shop All Products
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No products found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
