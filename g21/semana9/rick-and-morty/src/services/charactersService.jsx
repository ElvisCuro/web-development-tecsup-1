export const readCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  return response.json();
};

export const readCharacter = async ({ params }) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`);
  return response.json();
};