import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    updatedTask: (state, { payload }) => {
      state.tasks = state.tasks.map((task) =>
        task.id === payload.id ? payload : task
      );
    },
  },
});

export const { setTasks, updatedTask } = taskSlice.actions;
export default taskSlice.reducer;
