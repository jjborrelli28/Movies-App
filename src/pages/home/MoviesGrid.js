import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import ImageNoAvailable from "../../assets/ImageNoAvailable.png";
import { RenderStars } from "../../shared/RenderStars";

export const MoviesGrid = ({ movies }) => {
  return (
    <div>
      {movies.length > 0 ? (
        <Row xs={1} sm={2} md={3} lg={5} xl={6}>
          {movies.map(
            (movie, i) =>
              i < 18 && (
                <Col
                  key={movie.id}
                  className="mb-4 animate__animated animate__fadeIn animate__slow"
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={
                        movie.poster_path
                          ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
                          : ImageNoAvailable
                      }
                    />
                    <div
                      className="d-flex justify-content-end"
                      style={{
                        position: "absolute",
                        backgroundColor: "rgba(0, 0, 0, .5)",
                        width: "100%",
                        padding: ".5rem",
                      }}
                    >
                      {RenderStars(
                        Math.ceil(movie.vote_average / 2),
                        "star-card-key-"
                      )}
                    </div>
                  </Card>
                  <div
                    className="d-flex justify-content-center mt-1"
                    style={{ color: "white" }}
                  >
                    <p>{movie.title}</p>
                  </div>
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
