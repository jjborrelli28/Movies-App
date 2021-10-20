import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export const MostPopularMovies = ({ movies }) => {
  return (
    <Row lg={6}>
      {movies?.map(
        (movie, i) =>
          i < 6 && (
            <Col key={movie.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title></Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          )
      )}
    </Row>
  );
};
