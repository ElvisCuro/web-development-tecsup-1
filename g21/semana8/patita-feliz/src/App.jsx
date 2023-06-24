import './App.css';
import Form from './components/appointment/Form';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';

function App() {
  const header = {
    title: '🐾 Patita Feliz I La mejor veterinaria del Perú 🐾',
    subtitle: '🐭 Porque es parte de nuestra familia, lo cuidamos 🐭'
  };

  const footer = {
    title: 'Patita Feliz',
    year: new Date().getFullYear(),
    author: 'Elliot Garamendi'
  };

  return (
    <>
      <Header data={header} />
      <main>
        <div className="container">
          <div className="row justify-content-between">
            <Form />
          </div>
        </div>
      </main>
      <Footer data={footer} />
    </>
  );
}

export default App
