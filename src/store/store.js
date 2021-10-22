import { configureStore } from "@reduxjs/toolkit";
import { urlReducer } from "../reducers/urlReducer";
import { formReducer } from "../reducers/formReducer";
import { searchReducer } from "../reducers/searchReducer";
import { ratingReducer } from "../reducers/ratingReducer";
import { titleReducer } from "../reducers/titleReducer";

export const store = configureStore({
  reducer: {
    url: urlReducer,
    form: formReducer,
    search: searchReducer,
    rating: ratingReducer,
    title: titleReducer,
  },
});
