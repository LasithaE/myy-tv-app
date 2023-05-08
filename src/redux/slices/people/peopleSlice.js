import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  people: [],
  error: "",
};

export const fetchPeople = createAsyncThunk("people/fetchPeople", async () => {
  try {
    const response = await axios.get("https://api.tvmaze.com/people");
    return response.data;
  } catch (error) {
    throw Error(error.message);
  }
});

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.loading = false;
      state.people = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPeople.rejected, (state, action) => {
      state.loading = false;
      state.people = [];
      state.error = action.error.message;
    });
  },
});

export default peopleSlice.reducer;
