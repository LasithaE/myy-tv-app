import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  showDetails: {},
  error: "",
};

export const fetchShowDetails = createAsyncThunk(
  "showDetails/fetchShowDetails",
  async (params) => {
    const showId = params?.id;
    try {
      const response = await axios.get(
        `https://api.tvmaze.com/shows/${showId}`
      ); 
      return response.data;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

const showDetailsSlice = createSlice({
  name: "showDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShowDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShowDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.showDetails = action.payload;
      state.error = "";
    });
    builder.addCase(fetchShowDetails.rejected, (state, action) => {
      state.loading = false;
      state.showDetails = {};
      state.error = action.error.message;
    });
  },
});

export default showDetailsSlice.reducer;
