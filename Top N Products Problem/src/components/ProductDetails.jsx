import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 border rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p><strong>Company:</strong> {product.company}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> {product.rating}/5</p>
      <p><strong>Discount:</strong> {product.discount}%</p>
      <p><strong>Availability:</strong> {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductDetails;