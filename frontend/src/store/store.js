import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./slices/formSlice";
import taskReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    task: taskReducer,
  },
});