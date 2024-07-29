import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const products = [
    { id: 1, name: 'Product 1', company: 'Company A', category: 'Electronics', price: 99.99, rating: 4.5, discount: 10, availability: true },
    { id: 2, name: 'Product 2', company: 'Company B', category: 'Home', price: 49.99, rating: 4.0, discount: 5, availability: false },
    // Add more products as needed
  ];

  return (
    <Router>
      <div className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<ProductList products={products} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;