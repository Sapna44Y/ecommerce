import React, { useState } from "react";
import ProductModal from "./ProductModal";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="border-2 p-4 rounded-md shadow-lg cursor-pointer bg-white border-gray-300  hover:border-blue-500 hover:shadow-2xl hover:bg-gray-100 duration-300"
        onClick={() => setShowModal(true)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain"
        />
        <h3 className="text-lg font-bold mt-2">{product.title}</h3>
        <p className="text-yellow-500">⭐ {product.rating?.rate} / 5</p>
        <p className="text-gray-700 font-semibold">${product.price}</p>
      </div>

      {/* Show Modal when showModal is true */}
      {showModal && (
        <ProductModal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProductCard;
