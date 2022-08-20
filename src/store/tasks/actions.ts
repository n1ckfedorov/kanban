import { ITaskProps } from "../../components/Task";
import { TASK_ADD, TASK_ADD_ALL, TASK_REMOVE } from "./actionTypes";


export const addAllTasks = (task : ITaskProps) => ({
    type: TASK_ADD_ALL,
    payload: task
});

export const addTask = (task : ITaskProps) => ({
    type: TASK_ADD,
    payload: task
});

export const removeTask = (id : number) => ({
    type: TASK_REMOVE,
    payload: {id}
});
