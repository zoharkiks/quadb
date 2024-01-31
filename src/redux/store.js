import { configureStore } from "@reduxjs/toolkit";
import showReducer from "./showSlice";
import { showsApi } from "./showsApi";

export const store = configureStore({
  reducer: {
    shows: showReducer,
    [showsApi.reducerPath]: showsApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(showsApi.middleware),
});
