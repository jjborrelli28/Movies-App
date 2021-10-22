import { types } from "../types/types";

const initialState = {
  value: "",
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FORM:
      return {
        value: action.payload,
      };

    default:
      return state;
  }
};
