export const readLocations = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/location');
  return response.json();
};

export const readLocation = async ({ params }) => {
  const response = await fetch(`https://rickandmortyapi.com/api/location/${params.id}`);
  return response.json();
};