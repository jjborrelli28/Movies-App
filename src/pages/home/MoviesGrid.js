import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";

export const MoviesGrid = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={5} xl={6}>
          {movies.map(
            (movie, i) =>
              i < 18 && (
                <Col key={movie.id} className="mb-4">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    />
                  </Card>
                </Col>
              )
          )}
        </Row>
      ) : (
        <Alert variant="danger">{`No results for your search`}</Alert>
      )}
    </div>
  );
};

/*
            <Card.Body>
             <Card.Title></Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
*/
