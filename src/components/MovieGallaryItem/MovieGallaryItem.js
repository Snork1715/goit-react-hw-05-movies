import "./MovieGallaryItem.css";
import defaultImage from "../../images/DefaultMovieCat.png";
const IMAGE_URL = "https://image.tmdb.org/t/p/w342";

export default function ImageGallaryItem({
  title,
  poster_path,
  vote_average,
  release_date,
}) {
  return (
    <article className="movie-article">
      <img
        className="movie-image"
        src={poster_path ? `${IMAGE_URL}${poster_path}` : defaultImage}
        alt={title}
      />
      <div className="movie-info">
        <h3>{title}</h3>
        <p>Vote mark: {vote_average}</p>
        <p>Release date: {release_date}</p>
      </div>
    </article>
  );
}
