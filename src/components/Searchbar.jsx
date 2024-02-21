import { useState } from "react";
import {
  useGetProductsQuery,
  useSendSearchMutation,
} from "../redux/api/productApiSlice";
import Product from "../pages/Products/ProductCard";
import Loader from "./Loader";
import { useSelector } from "react-redux";

const Searchbar = () => {
  const [keyword, setKeyword] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const { data, isLoading, isError } = useGetProductsQuery({ keyword });
  const [search] = useSendSearchMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Get the value of the input field
    const value = e.target.elements.search.value;

    // Update the keyword state
    setKeyword(value);
    if (data?.products.length === 0) {
      return;
    }
    const result = await search({ value, user: userInfo._id });
    localStorage.setItem("lastSearch", result.data.recommendation );
    console.log(result.data.recommendation);
  };

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center"
      >
        <input
          type="text"
          name="search"
          placeholder="Search products..."
          className="border border-gray-300 px-4 py-2 rounded-md mr-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </form>

      <div className="p-3">
        <div className="flex flex-wrap">
          {isLoading ? (
            <Loader />
          ) : isError ? (
            <div>Error fetching data</div>
          ) : data?.products.length === 0 && keyword === "" ? ( // Check if keyword is empty
            <div>No products searched yet</div> // Display initial text
          ) : data?.products.length === 0 ? (
            <div>No products found</div>
          ) : (
            data?.products.map((p) => {
              return (
                <div className="p-3" key={p._id}>
                  <Product p={p} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
