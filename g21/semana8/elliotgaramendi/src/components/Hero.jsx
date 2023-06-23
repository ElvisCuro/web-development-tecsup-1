const Hero = () => {
  return (
    <article className="hero">
      <img src="https://i.postimg.cc/x9MyhM3D/react-system.webp" alt="Fondo de portada" className="img img--background" />
      <div className="container">
        <div className="card" style={{ position: 'relative' }}>
          <div className="card__body">
            <h1 className="card__subtitle">Elliot Garamendi</h1>
            <h2 className="card__title">El mejor Frontend Developer y Docente</h2>
            <p className="card__text">Desarrollador Web Frontend con React y Next.js. Docente de especialización en Desarrollo Web Frontend. Apasionado del autoaprendizaje y del código limpio.</p>
            <div className="d-flex gap-2xs">
              <button className="button button--outline-primary">Descargar CV</button>
              <button className="button button--primary">Contacto</button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;