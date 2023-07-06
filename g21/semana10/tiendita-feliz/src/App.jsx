import './App.css'
import Header from './components/Header';
import Products from './components/Products';
import { products } from './mocks/products.json';

function App() {
  return (
    <>
      <Header />
      <section className='py-12'>
        <div className="container px-4 mx-auto flex flex-col gap-8">
          <Products data={products} />
        </div>
      </section>
    </>
  )
}

export default App
