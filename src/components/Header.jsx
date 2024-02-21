import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useGetProductsQuery({ keyword: keyword });
  // console.log(data);

  useEffect(() => {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      const searchArray = lastSearch.split(","); // Split the string into an array
      searchArray.forEach((searchTerm) => {
        setKeyword((prevKeywords) => [...prevKeywords, searchTerm]); // Add each search term to the keyword array
      });
      console.log(keyword);
    }
  }, []);

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <>
      <div className="text-center mt-8 mb-6 text-2xl font-bold text-pink-800">
        Top Products
      </div>
      <div className="w-full">
        <ProductCarousel />
      </div>

      <div className="text-center mt-8 mb-6 text-2xl font-bold text-pink-800">
        Recommended Products
      </div>

      <div className="flex justify-center">
        <div className="xl:block lg:hidden md:hidden sm:hidden">
          {data.products.length > 0 ? (
            <div className="grid grid-cols-3 gap-6">
              {data.products.map((product) => (
                <div key={product._id} className="w-full">
                  <SmallProduct product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xl text-gray-600">
              No recommended products found
            </div>
          )}
        </div>
      </div>
      {data.products.length > 0 && (
        <div className="text-center mt-8 text-xl text-light">
          These products are recommended based on your interaction with the
          website and your search history.
        </div>
      )}
    </>
  );
};

export default Header;
