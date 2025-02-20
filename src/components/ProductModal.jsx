import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { IoClose } from "react-icons/io5";

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  if (!product) return null;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleBuyNow = () => {
    navigate("/buy", { state: { product, quantity } });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-12 z-5">
      <div className="bg-white mt-20 m-10 p-6 rounded-lg w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[45%] 2xl:w-[40%] h-[80vh] max-h-[700px] overflow-y-auto shadow-lg relative border-2 border-gray-300 hover:border-blue-300 hover:shadow-2xl hover:shadow-gray-600 hover:bg-gray-100 duration-300">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
              {product.title}
            </h2>
            <p className="text-yellow-500 font-semibold text-sm sm:text-base">
              ⭐ {product.rating?.rate} / 5
            </p>
            <p className="text-gray-700 font-semibold text-sm sm:text-base">
              Price: ${product.price}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-2">
              {product.description}
            </p>

            <div className="flex items-center mt-4">
              <button
                className="bg-gray-300 px-3 py-1 rounded text-lg sm:text-xl"
                onClick={handleDecrease}
              >
                -
              </button>
              <span className="px-4 text-lg sm:text-xl">{quantity}</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded text-lg sm:text-xl"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>

            <div className="flex gap-4 mt-4 flex-wrap justify-start sm:justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded w-full sm:w-auto text-sm sm:text-base"
                onClick={() => {
                  addToCart(product, quantity);
                  onClose(); // Close modal after adding
                }}
              >
                Add to Cart
              </button>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto text-sm sm:text-base"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
