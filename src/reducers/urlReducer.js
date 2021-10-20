import { types } from "../types/types";

const initialState = {
  url: process.env.REACT_APP_DISCOVER_URL,
};

export const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISCOVER_URL:
      return {
        url: process.env.REACT_APP_DISCOVER_URL,
      };

    case types.SEARCH_URL:
      return {
        url: process.env.REACT_APP_SEARCH_URL + action.payload,
      };

    default:
      return state;
  }
};
