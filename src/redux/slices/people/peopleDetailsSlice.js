import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  showDetails: {},
  error: "",
};

export const fetchPeopleDetails = createAsyncThunk(
  "peopleDetails/fetchPeopleDetails",
  async (params) => {
    const personId = params?.id;
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/people/${personId}`
      );
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const peopleDetailsSlice = createSlice({
  name: "peopleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeopleDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPeopleDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.peopleDetails = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPeopleDetails.rejected, (state, action) => {
      state.loading = false;
      state.peopleDetails = {};
      state.error = action.error.message;
    });
  },
});

export default peopleDetailsSlic
e.reducer;
