import { useLocation } from 'react-router-dom';

const ProductDetails = () => {
  const { state } = useLocation();
  const { product } = state || {};

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p><strong>Product Name:</strong> {product.productName}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}/5</p>
      <p><strong>Discount:</strong> {product.discount}%</p>
      <p><strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetails;
