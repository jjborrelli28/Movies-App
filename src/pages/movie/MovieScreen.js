import { useParams } from "react-router";
import { useFetch } from "../../hooks/useFetch";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RenderStars } from "../../shared/RenderStars";
import { useDispatch } from "react-redux";
import { types } from "../../types/types";

export const MovieScreen = () => {
  const { movieID } = useParams();

  const dispatch = useDispatch();

  const { data } = useFetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=b952d788417d06b0a7d346629ce8cc85`
  );

  if (data) {
    const action = {
      type: types.TITLE_ON,
      payload: {
        title: `${data.title}`,
      },
    };

    dispatch(action);
  }

  return (
    <Container className="">
      {data && (
        <Row>
          <Col
            xs={12}
            lg={4}
            className="d-flex justify-content-center justify-content-md-end p-2"
          >
            <img
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data.poster_path}`}
              alt="img-movie"
              style={{ border: "solid gray 0.1rem", borderRadius: "0.25rem" }}
            />
          </Col>
          <Col xs={12} lg={6} className="d-flex justify-content-center p-2">
            <div className="data-container">
              <h5>
                {data.title}&nbsp;
                <span style={{ color: "gray" }}>
                  ({data.release_date.slice(0, 4)})
                </span>
              </h5>
              <p>{RenderStars(Math.ceil(data.vote_average / 2))}</p>
              <p style={{ color: "gray" }}>
                {data.release_date} - ({data.original_language.toUpperCase()}) -
                {data.genres.map((genre, index) => (
                  <span key={index}>
                    {index !== 0 && `,`}&nbsp;
                    {genre.name}
                  </span>
                ))}{" "}
                - {data.runtime}min
              </p>
              <h6 style={{ color: "lightgray" }}>{data.tagline}</h6>
              <h6>Overview</h6>
              <p style={{ color: "lightgray" }}>{data.overview}</p>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};
