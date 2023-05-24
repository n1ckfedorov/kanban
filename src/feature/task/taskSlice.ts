import { createSlice } from "@reduxjs/toolkit";
import { ITaskProps } from "../../components";
import { Status } from "../../const/statuses";

export const initialState: { tasks: ITaskProps[] } = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addAllTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.unshift({
        title: action.payload.title,
        status: action.payload.newStatus || Status.New,
        id: state.tasks.length + 1,
        completed: false,
      });
    },
    editTaskStatus: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        action.payload.id === task.id
          ? { ...task, status: action.payload.status }
          : task
      );
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks?.filter(
        (task) => action.payload.id !== task.id
      );
    },
  },
});

export const { addAllTasks, addTask, editTaskStatus, removeTask } =
  taskSlice.actions;

export default taskSlice.reducer;
