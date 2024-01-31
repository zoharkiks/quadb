import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shows: [],
};

export const showSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
      setShows: (state, action) => {
        state.shows = action.payload;
      },
    },
  });

  export const { setShows } = showSlice.actions;
  export default showSlice.reducer;

