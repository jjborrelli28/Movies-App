import { useDispatch, useSelector } from "react-redux";
import Badge from "react-bootstrap/esm/Badge";

export const Rating = () => {
  const { rating } = useSelector((state) => state.rating);
  const dispatch = useDispatch();

  const handleRatingSelect = (index) => {
    index++;
    if (index === rating) {
      dispatch({
        type: 0,
      });
    } else {
      dispatch({
        type: index,
      });
    }
  };

  return (
    <Badge
      bg="primary"
      style={{ color: "#ffffff" }}
      className="m-2 ps-2 pe-1 pt-2 pb-2 d-flex align-items-center justify-content-center"
    >
      Rating: &nbsp;
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <i
            className="fas fa-star me-1 stars"
            id={index + 1}
            style={index < rating ? { color: "#efb810" } : { color: "#000000" }}
            key={index}
            onClick={() => handleRatingSelect(index)}
          ></i>
        ))}
    </Badge>
  );
};
