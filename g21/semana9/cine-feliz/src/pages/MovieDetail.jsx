import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  const { backdrop_path, budget, genres, homepage, original_language, original_title, overview, production_companies, production_countries, release_date, revenue, runtime, spoken_languages, tagline, vote_average } = movie;

  const convertMinutesToHours = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return hours + "h " + remainingMinutes + "min";
  };

  const convertToStars = (rating) => {
    let stars = '';
    let wholeStars = Math.floor(rating / 2);
    let halfStar = (rating / 2) - wholeStars;
    for (let index = 0; index < wholeStars; index++) {
      stars += '⭐';
    }
    (halfStar > 0) && (stars += '✨')

    return stars;
  };

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
      setMovie(data);
    };
    fetchApi();
  }, []);

  return (
    <>
      <section className="hero">
        <img src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} alt="" width="1280" height="720" />
      </section>
      <section className="section">
        <div className="container">
          <h1>{original_title} <sub>{tagline}</sub></h1>
          <span>{convertToStars(vote_average)} {vote_average}</span>
          <h2>{convertMinutesToHours(runtime)} I {release_date} I {original_language} {homepage ?? `I ${<a href={homepage} target="_blank" rel="noopener noreferrer">🌐</a>}`}</h2>
          <ul>
            {genres === undefined || genres.map(element => <li key={element.id}>{element.name}</li> ?? 'null')}
          </ul>
          <p>{overview}</p>
          <ul>
            {production_companies === undefined || production_companies.map(element => <img key={element.id} src={`https://image.tmdb.org/t/p/w92${element.logo_path}`} alt={element.name} /> ?? 'null')}
          </ul>
          <ul>
            {production_countries === undefined || production_countries.map((element, index) => <li key={index}>{element.name}</li> ?? 'null')}
          </ul>
          <ul>
            {spoken_languages === undefined || spoken_languages.map((element, index) => <li key={index}>{element.name}</li> ?? 'null')}
          </ul>
          <h3>Presupuesto: {budget} I Recaudación: {revenue}</h3>
        </div>
      </section>
    </>
  );
};

export default MovieDetail;