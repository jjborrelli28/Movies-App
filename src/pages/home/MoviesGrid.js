import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import ImageNoAvailable from "../../assets/ImageNoAvailable.png";
import { RenderStars } from "../../shared/RenderStars";
import { useHistory } from "react-router-dom";

export const MoviesGrid = ({ movies }) => {
  const history = useHistory();

  const handleMovieSelect = (movieID) => {
    history.push(`/movie/${movieID}`);
  };

  return (
    <div>
      {movies.length > 0 ? (
        <Row xs={2} sm={3} md={4} lg={5} xl={6}>
          {movies.map(
            (movie, i) =>
              i < 18 && (
                <Col
                  key={movie.id}
                  className="mb-4 animate__animated animate__fadeIn animate__slow colum-grid"
                >
                  <Card
                    onClick={() => handleMovieSelect(movie.id)}
                    className="card-grid"
                  >
                    <Card.Img
                      variant="top"
                      src={
                        movie.poster_path
                          ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
                          : ImageNoAvailable
                      }
                    />
                    {
                      <div
                        className="d-flex justify-content-end"
                        style={{
                          position: "absolute",
                          backgroundColor: "rgba(0, 0, 0, .5)",
                          width: "100%",
                          padding: ".5rem",
                        }}
                      >
                        {RenderStars(Math.ceil(movie.vote_average / 2))}
                      </div>
                    }
                  </Card>
                  <div className="d-flex justify-content-center mt-1">
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
