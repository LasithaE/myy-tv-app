import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./slices/show/showsSlice";

export const store =  configureStore({
  reducer: {
    shows: showsReducer,
  },
});


