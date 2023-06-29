import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?language=es-ES`
      const options = {
        method: 'GET',
        headers: {
          authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZjlmNzA1YjQ3ODRmNTQ3Mzc2ZjJjZDg4Mzg5MTY4NiIsInN1YiI6IjYyNTA1MjFlYTA1NWVmMDA2NTU3NTEzOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jYHK5Rt55pBTHvGjrEGTjAXRVlGOdnDBpqBxhnhrCL4'
        }
      };
      const response = await fetch(url, options);
      const data = await response.json();
      console.log(data);
    };
    fetchApi();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <h1>Detalle de Película de id: {movieId}</h1>
      </div>
    </section>
  );
};

export default MovieDetail;