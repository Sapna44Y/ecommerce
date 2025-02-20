function Top() {
  return (
    <div className="relative w-full h-[90vh] flex justify-center items-center text-center border-b-2 bg-white before:absolute before:top-0 before:right-0 before:w-1/2 before:h-full before:bg-[#fefc76] before:content-['']">
      <div className="relative z-5 max-w-3xl px-6 pt-25">
        {" "}
        {/* Added padding-top */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight">
          Welcome to My Store
          <br />
          Your Shopping Destination
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black mt-6">
          Discover a wide range of products tailored just for you. Shop with
          ease and find exactly what you need.
        </p>
      </div>
    </div>
  );
}

export default Top;
