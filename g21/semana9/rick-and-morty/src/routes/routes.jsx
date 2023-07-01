import { createBrowserRouter } from "react-router-dom";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/personajes',
    element: <h1>Personajes</h1>
  },
  {
    path: '/ubicaciones',
    element: <h1>Ubicaciones</h1>
  },
  {
    path: '/episodios',
    element: <h1>Episodios</h1>
  },
]);