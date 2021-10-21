import { useDispatch, useSelector } from "react-redux";

export const Rating = () => {
  const { stars } = useSelector((state) => state.rating);
  const dispatch = useDispatch();

  const handleRatingSelect = ({ target }) => {
    if (parseInt(target.id) === stars) {
      const action = {
        type: 0,
      };
      dispatch(action);
    } else {
      const action = {
        type: parseInt(target.id),
      };
      dispatch(action);
      console.log(parseInt(target.id));
      console.log(stars);
    }
  };

  return (
    <div>
      {Array(5)
        .fill(null)
        .map((star, i) => (
          <i
            className="fas fa-star me-1 stars"
            id={i + 1}
            style={i < stars ? { color: "#efb810" } : { color: "#000000" }}
            key={i}
            onClick={handleRatingSelect}
          ></i>
        ))}
    </div>
  );
};
