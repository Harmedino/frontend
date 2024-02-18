import { useState } from 'react';
import { useGetProductsQuery } from "../redux/api/productApiSlice";
import Product from "../pages/Products/ProductCard";
import Loader from './Loader';

const Searchbar = () => {
  const [keyword, setKeyword] = useState('');
    const { data, isLoading, isError } = useGetProductsQuery({ keyword });
    
   
  
    // Update the state and save the search word to localStorage
    const handleChange = (e) => {
      const value = e.target.value;
      setKeyword(value);
      localStorage.setItem('lastSearch', value);
    };
  const handleSubmit = (e) => {
    e.preventDefault();
    // No need to handle search here, as it's already handled by useEffect
  };

  return (
    <div className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="flex items-center justify-center">
        <input
          type="text"
          value={keyword}
          onChange={handleChange}
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
  <h2 className="h4 text-center mb-2">{data?.products.length} Products</h2>
  <div className="flex flex-wrap">
  {isLoading ? (
    <Loader />
  ) : isError ? (
    <div>Error fetching data</div>
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
