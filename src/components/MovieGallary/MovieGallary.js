import MovieGallaryItem from "../MovieGallaryItem";
import "./MovieGallary.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import slugify from "slugify";

export default function MovieGallary({ movies }) {
  const location = useLocation();

  return (
    <ul className="movies-block">
      {movies.map(({ id, title, poster_path, vote_average, release_date }) => (
        <li key={id}>
          {/* <Link to={`/movies/${id}`} state={{ from: location }}> */}
          <Link
            to={`/movies/${slugify(`${title} ${id}`, { lower: true })}`}
            state={{ from: location }}
          >
            <MovieGallaryItem
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
              release_date={release_date}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
