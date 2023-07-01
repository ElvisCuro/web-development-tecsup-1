import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const routeError = useRouteError();

  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1>404</h1>
        <h2>{routeError.statusText}</h2>
        <Link to="/">Página de inicio</Link >
      </div>
    </section>
  );
};

export default NotFound;