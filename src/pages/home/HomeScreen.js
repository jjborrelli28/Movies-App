import Container from "react-bootstrap/Container";
import { useFetch } from "../../hooks/useFetch";

export const HomeScreen = () => {
  const url =
    "https://api.themoviedb.org/3/discover/movie/?api_key=b952d788417d06b0a7d346629ce8cc85";

  const { data } = useFetch(url);

  const movies = data?.results;

  console.log(movies);
  return (
    <Container>
      <h1>HomeScreen</h1>
    </Container>
  );
};
