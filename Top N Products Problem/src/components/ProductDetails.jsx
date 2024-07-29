import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const { product } = state || {};

  if (!product) {
    return (
      <div className="text-center mt-8 text-red-600 font-semibold text-xl">
        Product not found
      </div>
    );
  }

  return (
    <div
      className="max-w-4xl mx-auto mt-8 p-6 border border-gray-200 rounded-lg shadow-lg
                 bg-white
                 sm:p-8 md:p-10 lg:p-12"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
        {product.name}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-4">
        <span className="font-semibold text-gray-700">Product Name:</span> {product.productName}
      </p>
      <p className="text-lg sm:text-xl md:text-2xl mb-4">
        <span className="font-semibold text-gray-700">Price:</span> ${product.price}
      </p>
      <p className="text-lg sm:text-xl md:text-2xl mb-4">
        <span className="font-semibold text-gray-700">Rating:</span> {product.rating}/5
      </p>
      <p className="text-lg sm:text-xl md:text-2xl mb-4">
        <span className="font-semibold text-gray-700">Discount:</span> {product.discount}%
      </p>
      <p className="text-lg sm:text-xl md:text-2xl mb-4">
        <span className="font-semibold text-gray-700">Availability:</span>{" "}
        {product.availability ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductDetails;
