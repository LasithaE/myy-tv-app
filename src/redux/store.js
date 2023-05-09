import { configureStore } from "@reduxjs/toolkit";
import showsReducer from "./slices/show/showsSlice";
import peopleReducer from "./slices/people/peopleSlice";
import peopleDetailsReducer from "./slices/people/peopleDetailsSlice";
import showDetailsReducer from "./slices/show/showDetailsSlice";

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    showDetails: showDetailsReducer,
    people: peopleReducer,
    peopleDetails: peopleDetailsReducer,
  },
});
