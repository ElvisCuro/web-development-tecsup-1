import { useEffect, useState } from "react";

const Movies = () => {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const handlePreviusClick = () => {
    setPage(page - 1);
  }

  const handleNextClick = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?page=${page}`
      const options = {
        method: 'GET',
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlmNzA1YjQ3ODRmNTQ3Mzc2ZjJjZDg4Mzg5MTY4NiIsInN1YiI6IjYyNTA1MjFlYTA1NWVmMDA2NTU3NTEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYHK5Rt55pBTHvGjrEGTjAXRVlGOdnDBpqBxhnhrCL4'
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setMovies(data.results);
    };
    fetchApi();
  }, [page]);

  return (
    <section>
      <div>
        <h2>Películas</h2>
        {page > 1 && <button onClick={handlePreviusClick}>Atrás</button>}
        <button onClick={handleNextClick}>Siguiente</button>
        <div>
          {movies.map(element => {
            const { id, title, poster_path } = element;
            return (
              <div key={id}>
                <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt={title} width={220} height={330} />
                <h4>{title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Movies;