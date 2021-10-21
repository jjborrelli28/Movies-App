import { types } from "../types/types";

const initialState = {
  rating: `&vote_average.gte=0&vote_average.lte=10`,
  stars: 0,
};

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIVE_STARS:
      return {
        rating: `&vote_average.gte=8&vote_average.lte=10`,
        stars: types.FIVE_STARS,
      };

    case types.FOUR_STARS:
      return {
        rating: `&vote_average.gte=6&vote_average.lte=8`,
        stars: types.FOUR_STARS,
      };

    case types.THREE_STARS:
      return {
        rating: `&vote_average.gte=4&vote_average.lte=6`,
        stars: types.THREE_STARS,
      };

    case types.TWO_STARS:
      return {
        rating: `&vote_average.gte=2&vote_average.lte=4`,
        stars: types.TWO_STARS,
      };

    case types.ONE_STARS:
      return {
        rating: `&vote_average.gte=1&vote_average.lte=2`,
        stars: types.ONE_STARS,
      };

    case types.DEFAULT:
      return {
        rating: `&vote_average.gte=0&vote_average.lte=10`,
        stars: 0,
      };

    default:
      return state;
  }
};
