import { combineReducers } from "@reduxjs/toolkit";
import { ITaskProps } from "../../components/Task";
import { TASK_ADD, TASK_ADD_ALL, TASK_REMOVE } from "./actionTypes";


export interface TasksAction {
  type: string
  task: ITaskProps
  payload: ITaskProps
}


const tasks = (state: ITaskProps[] = [], action: TasksAction) => {
  switch (action.type) {
    case TASK_ADD_ALL:
      return action.payload;
    case TASK_ADD:
      return [...state, action.payload];
    case TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);
    default:
      return state;
  }
}


export const rootReducer = combineReducers({
  tasks
})
