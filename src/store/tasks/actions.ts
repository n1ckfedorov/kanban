import { Status } from './../../const/statuses';
import { ITaskProps } from "../../components/Task";
import { TASK_ADD, TASK_ADD_ALL, TASK_EDIT_STATUS, TASK_REMOVE } from "./actionTypes";


export const addAllTasks = (task : ITaskProps) => ({
    type: TASK_ADD_ALL,
    payload: task
});

export const addTask = (task : ITaskProps) => ({
    type: TASK_ADD,
    payload: task
});

export const editTaskStatus = (id: number , status: Status) => ({
    type: TASK_EDIT_STATUS,
    payload: {id , status}
});

export const removeTask = (id : number) => ({
    type: TASK_REMOVE,
    payload: {id}
});
