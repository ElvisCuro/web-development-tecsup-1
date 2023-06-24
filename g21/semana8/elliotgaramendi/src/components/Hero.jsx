const Hero = () => {
  return (
    <article className="hero">
      <img src="https://i.postimg.cc/x9MyhM3D/react-system.webp" alt="Fondo de portada" className="img img--background" />
      <div className="container g-layout g-layout--center md:g-layout--1-1 gap-md">
        <div className="card">
          <div className="card__body">
            <h1 className="card__subtitle">Elliot Garamendi</h1>
            <h2 className="card__title">El mejor Frontend Developer y Docente</h2>
            <p className="card__text">Desarrollador Web Frontend con React y Next.js. Docente de especialización en Desarrollo Web Frontend. Apasionado del autoaprendizaje y del código limpio.</p>
            <div className="d-flex gap-2xs">
              <a href="https://1drv.ms/u/s!As5U-bd3F-a6gYsmbbG-Dybk88biRQ?e=Rifl4V" target="_blank"
                rel="noopener noreferrer" class="button button--outline-primary">Descargar CV</a>
              <button className="button button--primary">Contacto</button>
            </div>
          </div>
        </div>
        <div className="hero__images">
          <img src="https://i.postimg.cc/MTgfKHSz/elliot-garamendi-feliz.webp" alt="Imagen de portada de Elliot Garamendi" width={256} height={256} className="img img--hero" />
          <div className="hero__technologies">
            <img src="https://www.svgrepo.com/show/353884/html-5.svg" alt="HTML" width={64} height={64} className="hero__technology" />
            <img src="https://www.svgrepo.com/show/353623/css-3.svg" alt="CSS" width={64} height={64} className="hero__technology" />
            <img src="https://www.svgrepo.com/show/353925/javascript.svg" alt="JavaScript" width={64} height={64} className="hero__technology" />
            <img src="https://www.svgrepo.com/show/452092/react.svg" alt="React" width={64} height={64} className="hero__technology" />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Hero;