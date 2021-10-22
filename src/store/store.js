import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "../reducers/urlReducer";
import { formReducer } from "../reducers/formReducer";
import { ratingReducer } from "../reducers/ratingReducer";
import { routeReducer } from "../reducers/routeReducer";

export const store = configureStore({
  reducer: {
    url: urlReducer,
    form: formReducer,
    rating: ratingReducer,
    route: routeReducer,
  },
});
