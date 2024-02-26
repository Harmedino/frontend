const Review = () => {
  return (
    <section className="py-12 bg-[#DB2777] mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
              Our Customer Reviews
            </h2>
            <p className="text-lg text-black">
              Read what our customers have to say about their experience with
              our products.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Example review cards */}
              <div className="bg-white rounded-md p-4 shadow-md">
                <p className="text-lg font-semibold mb-2 text-black">
                  "Great Quality Products"
                </p>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="mt-4 text-gray-700">- John Doe</p>
              </div>
              <div className="bg-white rounded-md p-4 shadow-md">
                <p className="text-lg font-semibold mb-2 text-black">
                  "Excellent Customer Service"
                </p>
                <p className="text-sm text-gray-600">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="mt-4 text-gray-700">- Jane Smith</p>
              </div>
              <div className="bg-white rounded-md p-4 shadow-md">
                <p className="text-lg font-semibold mb-2 text-black">
                  "Fast Shipping"
                </p>
                <p className="text-sm text-gray-600">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p className="mt-4 text-gray-700">- Michael Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
