import { configureStore } from "@reduxjs/toolkit";
import sportSlice from "./sportSlice";

const store = configureStore({
  reducer: {
    sport1: sportSlice,
  },
});

export default store;