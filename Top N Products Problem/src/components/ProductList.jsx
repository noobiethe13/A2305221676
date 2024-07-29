import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("");
  const [filters, setFilters] = useState({
    price: "",
    rating: "",
    availability: "",
    discount: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilters = () => {
    let filtered = [...products];

    if (filters.price) {
      filtered = filtered.filter(
        (product) => product.price <= parseFloat(filters.price)
      );
    }
    if (filters.rating) {
      filtered = filtered.filter(
        (product) => product.rating >= parseFloat(filters.rating)
      );
    }
    if (filters.availability) {
      filtered = filtered.filter(
        (product) => product.availability === (filters.availability === "true")
      );
    }
    if (filters.discount) {
      filtered = filtered.filter(
        (product) => product.discount >= parseFloat(filters.discount)
      );
    }

    switch (sortOption) {
      case "price":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "discount":
        filtered.sort((a, b) => b.discount - a.discount);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-4">
        <div className="flex flex-wrap gap-4 items-end">
          <input
            type="number"
            name="price"
            placeholder="Max Price"
            value={filters.price}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          />
          <input
            type="number"
            name="rating"
            placeholder="Min Rating"
            value={filters.rating}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          />
          <select
            name="availability"
            value={filters.availability}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          >
            <option value="">Availability</option>
            <option value="true">In Stock</option>
            <option value="false">Out of Stock</option>
          </select>
          <input
            type="number"
            name="discount"
            placeholder="Min Discount"
            value={filters.discount}
            onChange={handleFilterChange}
            className="border p-2 rounded w-full sm:w-auto"
          />
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border p-2 rounded w-full sm:w-auto"
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
            <option value="discount">Discount</option>
          </select>
          <button
            onClick={applyFilters}
            className="bg-blue-500 text-white p-2 rounded w-full sm:w-auto"
          >
            Apply Filters
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
