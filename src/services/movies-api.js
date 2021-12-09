const BASE_URL = "https://api.themoviedb.org/3";
const KEY = "3a92a1fcfb1e0a18fb78507fc5f18631";

async function fetchApiMovies(url = "", config = {}) {
  const responce = await fetch(url, config);
  return responce.ok
    ? await responce.json()
    : Promise.reject(new Error("Movies not found"));
}

export function fetchTrendingMovies() {
  return fetchApiMovies(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
}

export function fetchDetailMovie(movieID) {
  return fetchApiMovies(`${BASE_URL}/movie/${movieID}?api_key=${KEY}`);
}

export function fetchCast(movieID) {
  return fetchApiMovies(`${BASE_URL}/movie/${movieID}/credits?api_key=${KEY}`);
}

export function fetchReviews(movieID, type) {
  return fetchApiMovies(`${BASE_URL}/movie/${movieID}/reviews?api_key=${KEY}`);
}

export function fetchSearchMovie(query, page) {
  return fetchApiMovies(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=${page}`
  );
}
