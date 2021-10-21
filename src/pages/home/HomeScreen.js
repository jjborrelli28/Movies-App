import Container from "react-bootstrap/Container";
import { useFetch } from "../../hooks/useFetch";
import { MoviesGrid } from "./MoviesGrid";
import { useSelector } from "react-redux";
import { SpinnerContainer } from "./SpinnerContainer";

export const HomeScreen = () => {
  const { url } = useSelector((state) => state.url);

  const { rating } = useSelector((state) => state.rating);

  const { data } = useFetch(url + rating);

  const movies = data?.results;

  console.log(movies);
  return (
    <Container>
      {movies ? <MoviesGrid movies={movies} /> : <SpinnerContainer />}
    </Container>
  );
};
