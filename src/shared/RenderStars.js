export const RenderStars = (stars, key) => {
  return Array(stars)
    .fill(null)
    .map((star, i) => (
      <i
        className="fas fa-star me-1"
        key={i}
        id={i}
        style={{ color: "#efb810" }}
      ></i>
    ));
};
