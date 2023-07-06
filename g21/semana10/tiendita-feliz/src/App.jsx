import './App.css'
import { products } from './mocks/products.json';

function App() {
  console.log(products);

  return (
    <section className='py-12'>
      <div className="container p-4 mx-auto">
        <h1 className='text-sky-600 text-3xl font-black text-center'>🛒 Tiendita Feliz 🛒</h1>
      </div>
    </section>
  )
}

export default App
