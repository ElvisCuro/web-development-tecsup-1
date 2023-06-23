import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function App() {

  const routeLinks = [
    { href: '#projects', title: 'Proyectos', content: 'Proyectos' },
    { href: '#skills', title: 'Habilidades', content: 'Habilidades' },
    { href: '#contact', title: 'Contacto', content: 'Contacto' }
  ];

  const socialNetworks = [
    { href: 'https://www.youtube.com/@elliotgaramendi', title: 'YouTube', content: '<i class="bi bi-youtube"></i>' },
    { href: 'https://github.com/elliotgaramendi', title: 'GitHub', content: '<i class="bi bi-github"></i>' },
    { href: 'https://www.linkedin.com/in/elliotgaramendi/', title: 'LinkedIn', content: '<i class="bi bi-linkedin"></i>' },
    { href: 'https://www.instagram.com/elliotgaramendi/', title: 'Instagram', content: '<i class="bi bi-instagram"></i>' }
  ];

  return (
    <>
      <Header
        routeLinks={routeLinks}
        socialNetworks={socialNetworks}
      />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
