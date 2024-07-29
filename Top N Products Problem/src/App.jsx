import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import { fetchProducts } from './services/ProductApi';

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const companies = ["AMZ", "FLP", "SNP", "MYN", "AZO"];
  const categories = ["Phone", "Computer", "TV", "Earphone", "Tablet", "Charger", "Mouse", "Keypad", "Bluetooth", "Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC"];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const allProducts = [];
        for (const company of companies) {
          for (const category of categories) {
            try {
              const newProducts = await fetchProducts(company, category, 10, 1, 10000);
              allProducts.push(...newProducts);
            } catch (err) {
              console.error(`Error fetching products for ${company} - ${category}:`, err);
            }
          }
        }
        setProducts(allProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div className="text-center mt-8">Loading...</div>;
  if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

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
