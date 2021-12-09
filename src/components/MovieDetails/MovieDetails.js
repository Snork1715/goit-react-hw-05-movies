import "./MovieDetails.css";
import PageHeading from "../../components/PageHeading";
import defaultImage from "../../images/DefaultMovieCat.png";

const IMAGE_URL = "https://image.tmdb.org/t/p/w342";

export default function MovieDetails({
  movie: {
    poster_path,
    title,
    release_date,
    genres,
    overview,
    popularity,
    vote_average,
    vote_count,
  },
}) {
  return (
    <>
      <PageHeading text={title} />
      <article className="article">
        <div className="imageFrame">
          <img
            src={poster_path ? `${IMAGE_URL}${poster_path}` : defaultImage}
            alt={title}
          />
        </div>
        <div className="main-content">
          <h2 className="title">{`${title} (${release_date.slice(0, 4)})`}</h2>
          <div className="info">
            <p>{genres.map(({ name }) => name).join(", ")}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <p>
              <span>Popularity:</span> {popularity}
            </p>
            <p>
              <span>Score:</span> {vote_average}
            </p>
            <p>
              <span>Votes:</span> {vote_count}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
