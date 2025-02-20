import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  if (!cart) return <p>Loading cart...</p>;

  // Calculate Total Price & Quantity
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="p-6 mt-20 m-10 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-md shadow-lg bg-white hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-semibold">
                  ${item.price} x {item.quantity} ={" "}
                  <span className="text-green-600 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </p>

                {/* Quantity Control */}
                <div className="flex items-center mt-4 mb-4">
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-200"
                    onClick={() =>
                      item.quantity > 1
                        ? updateQuantity(item.id, item.quantity - 1)
                        : removeFromCart(item.id)
                    }
                  >
                    -
                  </button>
                  <span className="px-6 text-lg font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-200"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-red-600 transition duration-200"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 p-4 bg-gray-100 border rounded-md shadow-md text-xl font-bold">
            Total Cost:{" "}
            <span className="text-green-600">${totalPrice.toFixed(2)}</span>
          </div>

          {/* Place Order Button */}
          <button
            className="bg-green-500 text-white m-3 px-6 py-3 rounded-md mt-6 w-[200px] hover:bg-green-600 transition duration-200"
            onClick={() =>
              navigate("/orderBuy", {
                state: { cart, totalPrice, totalQuantity },
              })
            }
          >
            Place Order
          </button>
        </>
      )}

      {/* Continue Shopping Button */}
      <button
        className="bg-blue-500 text-white m-3 px-6 py-3 rounded-md mt-6 w-[200px] hover:bg-blue-600 transition duration-200"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Cart;
