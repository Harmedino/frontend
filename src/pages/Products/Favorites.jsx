import { useSelector } from "react-redux";
import { selectFavoriteProduct } from "../../redux/features/favorites/favoriteSlice";
import Product from "./Product";

const Favorites = () => {
  const favorites = useSelector(selectFavoriteProduct);

  return (
    <div className={`ml-[10rem] ${favorites.length === 0 ? 'h-[40vh]' : ''}`}>
  <h1 className="text-lg font-bold ml-[3rem] mt-[3rem]">
    FAVORITE PRODUCTS
  </h1>

  {favorites.length === 0 ? (
    <div className="flex items-center justify-center h-full">
      <p className="text-gray-500">You haven&apos;t added any favorite products yet.</p>
    </div>
  ) : (
    <div className="flex flex-wrap">
      {favorites.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  )}
</div>

  );
};

export default Favorites;
