import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrimaryLayout from "../layouts/primaryLayout";
import CharacterPage from "../pages/CharacterPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrimaryLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'personajes',
        element: <CharacterPage />
      },
      {
        path: 'ubicaciones',
        element: <h1 style={{ padding: '5rem' }}>Ubicaciones</h1>
      },
      {
        path: 'episodios',
        element: <h1 style={{ padding: '5rem' }}>Episodios</h1>
      }
    ]
  },
]);