import PageHeading from "../../components/PageHeading";
import { useQuery } from "react-query";
import * as API from "../../services/movies-api";
import { useState, useEffect } from "react";
import MovieGallery from "../../components/MovieGallary";
import Skeleton from "../../components/Skeleton";
import NotFound from "../../components/NotFound";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const { data, isLoading, isError, isSuccess } = useQuery("movies", () =>
    API.fetchTrendingMovies()
  );

  useEffect(() => {
    data && setMovies((movies) => [...movies, ...data.results]);
  }, [data]);

  return (
    <div>
      {isError && <NotFound />}
      {isLoading && <Skeleton />}
      {isSuccess && (
        <>
          <PageHeading text="Топ фильмов дня" />
          <MovieGallery movies={movies} />
        </>
      )}
    </div>
  );
}
