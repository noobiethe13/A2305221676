import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      onClick={handleClick}
      className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer 
                 sm:p-5 md:p-6 lg:p-8 xl:p-10 
                 sm:text-sm md:text-base lg:text-lg xl:text-xl"
    >
      <h2 className="font-semibold text-gray-800 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        {product.name}
      </h2>
      <p className="mt-2 text-gray-600">Product Name: {product.productName}</p>
      <p className="mt-1 text-gray-700">Price: ${product.price}</p>
      <p className="mt-1 text-gray-700">Rating: {product.rating}/5</p>
      <p className="mt-1 text-gray-700">Discount: {product.discount}%</p>
      <p className="mt-1 text-gray-700">
        Availability: {product.availability ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductCard;
