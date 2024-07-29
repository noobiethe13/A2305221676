import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const { product } = state || {};

  if (!product)
    return <div className="text-center mt-8">Product not found</div>;

  return (
    <div
      className="max-w-4xl mx-auto mt-8 p-4 border rounded-lg shadow 
                    sm:p-6 md:p-8 lg:p-10 
                    sm:text-sm md:text-base lg:text-lg"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {product.name}
      </h1>
      <p className="mb-2">
        <strong>Product Name:</strong> {product.productName}
      </p>
      <p className="mb-2">
        <strong>Price:</strong> ${product.price}
      </p>
      <p className="mb-2">
        <strong>Rating:</strong> {product.rating}/5
      </p>
      <p className="mb-2">
        <strong>Discount:</strong> {product.discount}%
      </p>
      <p className="mb-2">
        <strong>Availability:</strong>{" "}
        {product.availability ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
};

export default ProductDetails;
