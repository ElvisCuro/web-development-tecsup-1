import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Products from './components/Products';
import { products as initialProducts } from './mocks/products.json';

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    minPrice: 0,
    category: 'all'
  });

  const filterProducts = (data) => {
    return data.filter(element => {
      return (
        element.attributes.price * ((100 - element.attributes.discountPercentage) / 100) >= filters.minPrice && (
          filters.category === 'all' ||
          element.attributes.category === filters.category
        )
      );
    });
  };

  const filteredProducts = filterProducts(products);

  useEffect(() => {
    setCategories(initialProducts.reduce((categories, element) => {
      categories.includes(element.category) === false && categories.push(element.category)
      return categories;
    }, []));
  }, []);

  return (
    <>
      <Header
        setFilters={setFilters}
        categories={categories}
      />
      <section className='py-12'>
        <div className="container px-4 mx-auto">
          <Products />
        </div>
      </section>
    </>
  )
}

export default App
