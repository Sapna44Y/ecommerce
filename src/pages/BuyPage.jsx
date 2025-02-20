import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BuyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity: initialQuantity } = location.state || {};

  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  if (!product) {
    return <div className="text-center text-red-500">No product selected.</div>;
  }

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order placed:", formData, product, quantity);
    alert("Order placed successfully!");
    navigate("/");
  };

  return (
    <div className="max-w-3xl mt-28 mx-auto p-8 m-11 bg-white shadow-lg rounded-lg  border-2 border-gray-300 hover:border-blue-200 transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-black">Order Summary</h2>

      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6 border-b pb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-40 h-40 object-contain"
        />
        <div>
          <h3 className="text-xl font-semibold text-black">{product.title}</h3>
          <p className="text-gray-700">Price: ${product.price}</p>
          <div className="flex items-center gap-4 mt-2">
            <button
              className="bg-gray-300 px-3 py-1 rounded text-lg border border-gray-400 hover:border-blue-500 hover:shadow-md transition-all duration-200"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button
              className="bg-gray-300 px-3 py-1 rounded text-lg border border-gray-400 hover:border-blue-500 hover:shadow-md transition-all duration-200"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
          <p className="text-gray-800 font-semibold mt-2">
            Total: ${(product.price * quantity).toFixed(2)}
          </p>
        </div>
      </div>

      {/* User Details Form */}
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label className="block font-medium text-black">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-black">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-black">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-200"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-black">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded border-gray-300 focus:outline-none focus:border-blue-500 transition-all duration-200"
          />
        </div>

        <button
          type="submit"
          className="w-[150px] bg-green-400 text-white px-4 py-2 rounded w-full border border-green-500 hover:border-green-700 hover:shadow-2xl transition-all duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BuyPage;
