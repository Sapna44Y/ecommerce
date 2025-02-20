function Shop() {
  return (
    <div className="px-12 py-8 bg-black text-white h-[35vh] flex flex-col">
      <h1 className="text-2xl font-bold">Discover Your Next Favorite Item</h1>

      <p className="text-sm mt-2">
        Browse our exclusive collection and find the perfect product tailored
        just for you.
      </p>

      <div className="mt-4 flex gap-4">
        <button
          className="px-5 py-2 w-[120px] bg-white text-black border border-white rounded hover:bg-gray-200"
          onClick={() => window.open("/shop", "_blank")} // ✅ Opens in a new tab
        >
          Shop Now
        </button>

        <button className="px-3 py-1 w-[120px] rounded border border-white">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Shop;
