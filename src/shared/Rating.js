import { useDispatch, useSelector } from "react-redux";

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
    <div>
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
    </div>
  );
};
