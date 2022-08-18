import { ItemProps } from "../../components";
import { TASK_ADD, TASK_REMOVE } from "./actionTypes";


export const addTask = (task : ItemProps) => ({
    type: TASK_ADD,
    payload: task
});

export const removeTask = (id : number) => ({
    type: TASK_REMOVE,
    payload: {id}
});
