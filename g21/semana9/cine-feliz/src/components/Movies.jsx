import { useEffect, useState } from "react";

const Movies = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const url = 'https://api.themoviedb.org/3/discover/movie?page=1'
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
  }, []);

  return (
    <section>
      <div>
        <h2>Películas</h2>
        <div>
          {movies.map(element => {
            return (
              <div key={element.id}>
                <h4>{element.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Movies;