import { types } from "../types/types";

const initialState = {
  rating: 0,
  max: 10,
  min: 0,
};

export const ratingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FIVE_STARS:
      return {
        rating: 5,
        max: 10,
        min: 8,
      };

    case types.FOUR_STARS:
      return {
        rating: 4,
        max: 8,
        min: 6,
      };

    case types.THREE_STARS:
      return {
        rating: 3,
        max: 6,
        min: 4,
      };

    case types.TWO_STARS:
      return {
        rating: 2,
        max: 4,
        min: 2,
      };

    case types.ONE_STARS:
      return {
        rating: 1,
        max: 2,
        min: 0,
      };

    case types.DEFAULT:
      return {
        rating: 0,
        max: 10,
        min: 0,
      };

    default:
      return state;
  }
};
