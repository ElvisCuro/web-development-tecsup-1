import './App.css';
import Header from './sections/Header';

function App() {
  const header = {
    title: 'Patita Feliz I La mejor veterinaria del Perú',
    subtitle: '🐭Porque es parte de nuestra familia, lo cuidamos.🐭'
  };

  return (
    <Header data={header} />
  );
}

export default App
