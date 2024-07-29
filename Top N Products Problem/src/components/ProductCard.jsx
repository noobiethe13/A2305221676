import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      onClick={handleClick}
      className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer 
                 sm:p-6 md:p-8 lg:p-10 xl:p-12 
                 sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <h2 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
        {product.name}
      </h2>
      <p className="mt-2">Product Name: {product.productName}</p>
      <p className="mt-1">Price: ${product.price}</p>
      <p className="mt-1">Rating: {product.rating}/5</p>
      <p className="mt-1">Discount: {product.discount}%</p>
      <p className="mt-1">
        Availability: {product.availability ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
