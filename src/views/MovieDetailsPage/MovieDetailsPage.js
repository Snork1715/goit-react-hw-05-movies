import * as API from "../../services/movies-api";
import { Routes, Route, useParams } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import MovieDetails from "../../components/MovieDetails";
import DetailsMovieAdditional from "../../components/DetailsMovieAdditional";
import BackButton from "../../components/BackButton";
import Skeleton from "../../components/Skeleton";

const Cast = lazy(() =>
  import("../../components/Cast" /* webpackChunkName: "Cast" */)
);
const Reviews = lazy(() =>
  import("../../components/Reviews" /* webpackChunkName: "Reviews" */)
);

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { slug } = useParams();
  const movieID = slug.match(/[a-z0-9]+$/)[0];

  useEffect(() => {
    API.fetchDetailMovie(movieID).then(setMovie);
  }, [movieID]);

  return (
    <div>
      <BackButton />
      {movie && <MovieDetails movie={movie} />}
      <DetailsMovieAdditional />
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="cast" element={<Cast movieID={movieID} />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}
