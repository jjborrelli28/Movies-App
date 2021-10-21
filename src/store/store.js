import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "../reducers/urlReducer";
import { searchReducer } from "../reducers/searchReducer";
import { ratingReducer } from "../reducers/ratingReducer";
import { routeReducer } from "../reducers/routeReducer";

export const store = configureStore({
  reducer: {
    url: urlReducer,
    search: searchReducer,
    rating: ratingReducer,
    route: routeReducer,
  },
});
