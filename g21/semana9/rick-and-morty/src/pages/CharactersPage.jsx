import { useLoaderData } from "react-router-dom";

const CharactersPage = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <h1 style={{ padding: '5rem' }}>CharactersPage</h1>
  );
};

export default CharactersPage;