import './App.css'
import Products from './components/Products';
import { products } from './mocks/products.json';

function App() {
  return (
    <section className='py-12'>
      <div className="container p-4 mx-auto flex flex-col gap-8">
        <h1 className='text-sky-600 text-3xl font-black text-center'>🛒 Tiendita Feliz 🛒</h1>
        <Products data={products} />
      </div>
    </section>
  )
}

export default App
