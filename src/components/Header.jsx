import { useEffect, useState } from 'react';
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Loader from "./Loader";
import SmallProduct from "../pages/Products/SmallProduct";
import ProductCarousel from "../pages/Products/ProductCarousel";

const Header = () => {
  const [keyword, setKeyword] = useState('');
  const { data, isLoading } = useGetProductsQuery({ keyword });

  useEffect(() => {
    const lastSearch = localStorage.getItem('lastSearch');
    if (lastSearch) {
      setKeyword(lastSearch);
    }
  }, []);

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <div className="flex justify-around">
      <div className="xl:block lg:hidden md:hidden sm:hidden">
        <div className="grid grid-cols-2">
          {data.products.map((product) => (
            <div key={product._id}>
              <SmallProduct product={product} />
            </div>
          ))}
        </div>
      </div>
      <ProductCarousel />
    </div>
  );
};

export default Header;
