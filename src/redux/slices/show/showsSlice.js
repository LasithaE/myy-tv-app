import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  shows: [],
  error: "",
};

export const fetchShows = createAsyncThunk("shows/fetchShows", () => {
  return axios
    .get("https://api.tvmaze.com/shows")
    .then((response) => response.data);
});
export const fetchShowDetails = createAsyncThunk("shows/fetchShowDetails", (showId) => {
  console.log('axiossssssss',showId)
  const response= axios.get(`https://api.tvmaze.com/shows/${showId}`).then((response) => response.data);
  console.log('axiosss', response.data)
});
const showsSlice = createSlice({
  name: "shows",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchShows.fulfilled,(state,action)=>{
        state.loading=false
        state.shows=action.payload
        state.error=''
    })
    builder.addCase(fetchShows.rejected,(state,action)=>{
        state.loading=false
        state.shows=[]
        state.error=action.error.message
    })
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
export const { clearShowDetails } = showsSlice.actions;
export default showsSlice.reducer