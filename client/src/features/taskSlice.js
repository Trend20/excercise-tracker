import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskName: "",
  taskPriority: "",
  taskDescription: "",
  isFinished: false,
  isStarted: false,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskName = action.payload;
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
