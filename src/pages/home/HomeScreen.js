import Container from "react-bootstrap/Container";
import { useFetch } from "../../hooks/useFetch";
import { MoviesGrid } from "./MoviesGrid";
import { useSelector } from "react-redux";
import { SearchForm } from "./SearchForm";
import { SpinnerContainer } from "./SpinnerContainer";

export const HomeScreen = () => {
  const { url } = useSelector((state) => state.url);

  const { data } = useFetch(url);

  const movies = data?.results;

  return (
    <Container>
      <h1 className="mt-4 mb-4">Movies App</h1>
      <SearchForm />
      {movies ? <MoviesGrid movies={movies} /> : <SpinnerContainer />}
    </Container>
  );
};
