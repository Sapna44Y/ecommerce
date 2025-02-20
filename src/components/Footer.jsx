import { FaPaperPlane } from "react-icons/fa"; // Importing send icon

function Footer() {
  return (
    <div className="bg-black text-white pt-5">
      {/* Footer content */}
      <div className="container flex flex-wrap mx-auto items-center gap-6 space-y-8 sm:space-y-0 md:flex-row md:justify-between px-6 lg:px-12">
        {/* Exclusive section */}
        <div className="flex flex-col space-y-4 max-w-xs">
          <h1 className="font-bold text-base sm:text-lg md:text-xl">
            Exclusive
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl">Subscribe</h2>
          <p className="text-xs sm:text-sm md:text-base">
            Get 10% off your first order
          </p>

          {/* Input field with send icon */}
          <div className="flex items-center border border-white rounded overflow-hidden">
            <input
              className="p-2 flex-grow bg-transparent text-white placeholder-gray-400 outline-none text-sm sm:text-base"
              placeholder="Enter your email"
            />
            <button className="p-2 sm:p-3 bg-transparent">
              <FaPaperPlane size={16} className="text-white sm:text-lg" />
            </button>
          </div>
        </div>

        {/* Support section */}
        <div className="flex flex-col space-y-3 text-xs sm:text-sm md:text-base">
          <h1 className="font-bold text-base sm:text-lg">Support</h1>
          <p>123, Pork Street, Dl-111111, India</p>
          <p className="text-gray-400">Test@harmoni.com</p>
          <p className="text-gray-400">+91-999-9999</p>
        </div>

        {/* Account section */}
        <div className="flex flex-col space-y-3 text-xs sm:text-sm md:text-base">
          <h1 className="font-bold text-base sm:text-lg">Account</h1>
          <p className="hover:text-gray-400 cursor-pointer">My Account</p>
          <p className="hover:text-gray-400 cursor-pointer">Login/Register</p>
          <p className="hover:text-gray-400 cursor-pointer">Cart</p>
          <p className="hover:text-gray-400 cursor-pointer">Wishlist</p>
        </div>

        {/* Quick Links section */}
        <div className="flex flex-col space-y-3 text-xs sm:text-sm md:text-base">
          <h1 className="font-bold text-base sm:text-lg">Quick Links</h1>
          <p className="hover:text-gray-400 cursor-pointer">Privacy Policy</p>
          <p className="hover:text-gray-400 cursor-pointer">Terms of Use</p>
          <p className="hover:text-gray-400 cursor-pointer">FAQ</p>
          <p className="hover:text-gray-400 cursor-pointer">Contact</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 w-full bg-gray-900 text-center py-5">
        <h1 className="text-xs sm:text-sm md:text-base text-gray-400">
          &copy; 2025 All Rights Reserved
        </h1>
      </div>
    </div>
  );
}

export default Footer;
