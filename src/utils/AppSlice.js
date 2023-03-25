import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
  name: "sideBar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggle: state => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    CloseToggle: state => {
      state.isMenuOpen = false;
    },
  },
});
export const { toggle, CloseToggle } = AppSlice.actions;
export default AppSlice.reducer;
