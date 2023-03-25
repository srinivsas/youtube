import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    catchResults: (state, action) => {
      //   state = { ...state, ...action.payload };
      //   state = Object.assign(state, action.payload);
      return { ...state, ...action.payload };
    },
  },
});

export const { catchResults } = searchSlice.actions;
export default searchSlice.reducer;
