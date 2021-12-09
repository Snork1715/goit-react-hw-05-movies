import { lazy, Suspense, useEffect, useState } from "react";
import * as API from "../../services/movies-api";
import { useSearchParams } from "react-router-dom";
import SearchMovie from "../../components/SearchMovie";
import Skeleton from "../../components/Skeleton";

const MovieGallary = lazy(() =>
  import("../../components/MovieGallary" /* webpackChunkName: "Cast" */)
);

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);

  const query = searchParams.get("query");
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    if (query) {
      API.fetchSearchMovie(query, page).then((res) =>
        setMovies(() => {
          return [...res.results];
        })
      );
    }
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    if (newQuery !== query) {
      setSearchParams({ query: newQuery, page: 1 });
    }
    return;
  };

  return (
    <>
      <SearchMovie onHandleSubmit={handleSubmit} />
      <Suspense fallback={<Skeleton />}>
        {movies && <MovieGallary movies={movies} />}
      </Suspense>
    </>
  );
}
