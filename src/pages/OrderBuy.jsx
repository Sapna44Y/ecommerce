import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderBuy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalPrice, totalQuantity } = location.state || {};

  if (!cart || cart.length === 0) {
    return (
      <p className="p-6 text-red-500">
        No items found! Please add items to the cart.
      </p>
    );
  }

  // Handle Order Confirmation
  const handleConfirmOrder = (e) => {
    e.preventDefault();
    alert("✅ Successfully confirmed your order! 🎉");

    // Optional: Navigate to home or orders page after confirmation
    navigate("/");
  };

  return (
    <div className="p-6 border shadow-lg rounded-md bg-white max-w-3xl mx-auto mt-28 m-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Order Summary</h2>

      {/* Cart Items - Column Layout */}
      <div className="p-4 bg-gray-100 rounded-md">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b-2 pb-4 mb-4 last:border-b-2"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-contain"
            />
            <div>
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-700">
                ${item.price} x {item.quantity} ={" "}
                <span className="text-green-600 font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Total */}
      <div className="mt-6 p-4 bg-gray-200 border rounded-md text-xl font-bold text-center">
        Total Quantity: <span className="text-blue-500">{totalQuantity}</span>
        <br />
        Total Price:{" "}
        <span className="text-green-600">${totalPrice.toFixed(2)}</span>
      </div>

      {/* Order Form */}
      <div className="mt-6 bg-white p-6 border rounded-md shadow-md">
        <h3 className="text-xl font-semibold mb-3">Enter Your Details</h3>
        <form onSubmit={handleConfirmOrder}>
          <div className="mb-4">
            <label className="block font-medium">Full Name</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Phone Number</label>
            <input type="text" className="w-full p-2 border rounded" required />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Address</label>
            <textarea className="w-full p-2 border rounded" required></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderBuy;
