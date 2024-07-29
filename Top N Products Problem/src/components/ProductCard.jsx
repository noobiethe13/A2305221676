import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div 
      onClick={handleClick} 
      className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow cursor-pointer"
    >
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>Product Name: {product.productName}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}/5</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductCard;
