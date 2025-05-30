import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mode: "create",
  currentTask: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    openCreateForm: (state) => {
      state.isOpen = true;
      state.mode = "create";
      state.currentTask = null;
    },
    openEditForm: (state, action) => {
      state.isOpen = true;
      state.mode = "edit";
      state.currentTask = action.payload;
    },
    closeForm: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openCreateForm, openEditForm, closeForm } = formSlice.actions;
export default formSlice.reducer;
