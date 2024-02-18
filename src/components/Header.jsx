import { useEffect, useState } from "react";
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const [keyword, setKeyword] = useState("");
  const { data, isLoading } = useGetProductsQuery({ keyword });

  useEffect(() => {
    const lastSearch = localStorage.getItem("lastSearch");
    if (lastSearch) {
      setKeyword(lastSearch);
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
    </>
  );
};

export default Header;
