import { combineReducers } from "@reduxjs/toolkit";
import { ITaskProps } from "../../components/Task";
import { Status } from "../../const/statuses";
import { TASK_ADD, TASK_ADD_ALL, TASK_EDIT_STATUS, TASK_REMOVE } from "./actionTypes";


export interface TasksAction {
  type: string
  task: ITaskProps
  payload: ITaskProps
}


const tasks = (state: ITaskProps[] = [], action: TasksAction) => {
  let id = state.length + 1;

  switch (action.type) {
    case TASK_ADD_ALL:
      return action.payload;
    case TASK_ADD:
      return state.concat({title: action.payload.title, status: Status.New , id: id++ , completed: false});
    case TASK_EDIT_STATUS:
      return state.map(task => action.payload.id === task.id ? {...task ,  status: action.payload.status} : task);
    case TASK_REMOVE:
      return state.filter(task => action.payload.id !== task.id);
    default:
      return state;
  }
}


export const rootReducer = combineReducers({
  tasks
})
