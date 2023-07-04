import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrimaryLayout from "../layouts/primaryLayout";
import CharacterPage from "../pages/CharacterPage";
import CharactersPage from "../pages/CharactersPage";
import NotFoundPage from "../pages/NotFoundPage";
import { readCharacter, readCharacters } from "../services/charactersService";

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
        element: <CharactersPage />,
        loader: readCharacters
      },
      {
        path: 'personajes/:id',
        element: <CharacterPage />,
        loader: readCharacter
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