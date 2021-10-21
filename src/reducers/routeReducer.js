import { types } from "../types/types";

const initialState = {
  route: null,
  title: null,
};

export const routeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ROUTE_ON:
      return {
        route: action.payload.route,
        title: action.payload.title,
      };

    case types.ROUTE_OFF:
      return {
        route: null,
        title: null,
      };

    default:
      return state;
  }
};
