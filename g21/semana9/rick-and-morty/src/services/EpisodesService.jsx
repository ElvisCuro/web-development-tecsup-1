export const readEpisodes = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  return response.json();
};