import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./AppSlice";
import chatSlice from "./chatSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    sideBar: AppSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});

export default store;
