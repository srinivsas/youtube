import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sideBar: AppSlice,
    search: searchSlice,
  },
});

export default store;
