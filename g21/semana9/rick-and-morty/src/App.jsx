import { useLoaderData } from 'react-router-dom';
import './App.css';
import Categories from './components/Categories';
import Hero from './components/Hero';

function App() {
  const data = useLoaderData();

  return (
    <>
      <Hero />
      <Categories data={data} />
    </>
  )
}

export default App;