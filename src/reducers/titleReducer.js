import { types } from "../types/types";

const initialState = {
  title: null,
};

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TITLE_ON:
      return {
        title: action.payload.title,
      };

    case types.TITLE_OFF:
      return {
        title: null,
      };

    default:
      return state;
  }
};
