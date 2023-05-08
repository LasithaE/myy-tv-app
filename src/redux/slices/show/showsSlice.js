import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  shows: [],
  error: "",
};

export const fetchShows = createAsyncThunk("shows/fetchShows", async () => {
  try {
    const response = await axios.get("https://api.tvmaze.com/shows");
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

const showsSlice = createSlice({
  name: "shows",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShows.fulfilled, (state, action) => {
      state.loading = false;
      state.shows = action.payload;
      state.error = "";
    });
    builder.addCase(fetchShows.rejected, (state, action) => {
      state.loading = false;
      state.shows = [];
      state.error = action.error.message;
    });
  },
});

export default showsSlice.reducer;
