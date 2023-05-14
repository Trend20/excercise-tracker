import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskName: "",
  tasks: [],
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
      state.tasks = action.payload;
    },
  },
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;
