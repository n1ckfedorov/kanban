import { combineReducers } from "@reduxjs/toolkit";
import { ItemProps } from "../../components";
import { TASK_ADD, TASK_REMOVE } from "./actionTypes";


export interface TasksAction {
  type: string
  task: ItemProps
  payload: ItemProps | any
}

const tasks = (state: ItemProps[] = [], action: TasksAction) => {
  switch (action.type) {
    case TASK_ADD:
      return action.payload.concat(state);
    case TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);
    default:
      return state;
  }
}


export const rootReducer = combineReducers({
  tasks
})
