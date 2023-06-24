import './App.css';
import Footer from './sections/Footer';
import Header from './sections/Header';

function App() {
  const header = {
    title: 'Patita Feliz I La mejor veterinaria del Perú',
    subtitle: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  const footer = {
    title: 'Patita Feliz',
    year: new Date().getFullYear(),
    author: 'Elliot Garamendi'
  };

  return (
    <>
      <Header data={header} />
      <Footer data={footer} />
    </>
  );
}

export default App
