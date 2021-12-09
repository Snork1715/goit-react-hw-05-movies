import AppBar from "./components/AppBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
import MovieDetailsPage from "./views/MovieDetailsPage";
import Container from "./components/Container";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route
              path="/movies/:slug/*"
              element={<MovieDetailsPage />}
            ></Route>
          </Routes>
        </QueryClientProvider>
      </Container>
    </div>
  );
}

export default App;
