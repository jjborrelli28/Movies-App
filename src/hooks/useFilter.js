import { useSelector } from "react-redux";

export const useFilter = (movies) => {
  const { min, max } = useSelector((state) => state.rating);

  return movies?.filter(
    (movie) => min <= movie.vote_average && movie.vote_average <= max
  );
};
