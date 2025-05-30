import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  mode: "create",
  currentTask: null,
  boardId: null,
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    openCreateForm: (state, action) => {
      state.isOpen = true;
      state.mode = "create";
      state.currentTask = null;
      state.boardId = action?.payload?.boardId || null;
    },
    openEditForm: (state, action) => {
      state.isOpen = true;
      state.mode = "edit";
      state.currentTask = action.payload;
      state.boardId = action.payload?.boardId;
    },
    closeForm: (state) => {
      state.isOpen = false;
      state.boardId = null;
    },
  },
});

export const { openCreateForm, openEditForm, closeForm } = formSlice.actions;
export default formSlice.reducer;
