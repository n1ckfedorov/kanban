import { combineReducers } from "@reduxjs/toolkit";
import { ITaskProps } from "../../components/Task";
import { TASK_ADD, TASK_ADD_ALL, TASK_EDIT_STATUS, TASK_REMOVE } from "./actionTypes";


export interface TasksAction {
  type: string
  task: [ITaskProps]
  payload: ITaskProps
}


const tasks = (state: [ITaskProps[]] = [[]], action: TasksAction) => {
  switch (action.type) {
    case TASK_ADD_ALL:
      return [action.payload];
    case TASK_ADD:
      return [...state, action.payload];
    case TASK_EDIT_STATUS:
      return [state[0].map(task => action.payload.id === task.id ? {...task ,  status: action.payload.status} : task)];
    case TASK_REMOVE:
      return [state[0].filter(task => action.payload.id !== task.id)];
    default:
      return state;
  }
}


export const rootReducer = combineReducers({
  tasks
})
