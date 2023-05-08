import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./slices/show/showsSlice";
import showDetailsReducer from "./slices/show/showDetailsSlice";

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    showDetails: showDetailsReducer,
  },
});
