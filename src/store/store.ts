import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../feature/task/taskSlice";

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});
