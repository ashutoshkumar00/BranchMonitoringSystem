import { configureStore } from "@reduxjs/toolkit";
import BranchSlice from "../components/BranchSlice/BranchSlice";

const store = configureStore({
  reducer: {
    branch: BranchSlice,
  },
});

export default store;
