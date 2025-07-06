import { createSlice } from "@reduxjs/toolkit";

const allEventsSlice = createSlice({
  name: "allEvents",
  initialState: [],
  reducers: {
    setEvents: (state, action) => {
      return action.payload;
    },
  },
});

export const { setEvents } = allEventsSlice.actions;
export default allEventsSlice.reducer;
