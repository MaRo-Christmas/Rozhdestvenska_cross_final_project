import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import allEventsReducer from "./allEventsSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    allEvents: allEventsReducer,
  },
});
