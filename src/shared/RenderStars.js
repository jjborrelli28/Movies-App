export const RenderStars = (stars) => {
  return Array(stars === 0 ? 1 : stars)
    .fill(null)
    .map((_, index) => (
      <i
        className="fas fa-star me-1"
        key={index}
        style={{ color: "#efb810" }}
      ></i>
    ));
};
