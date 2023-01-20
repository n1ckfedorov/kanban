import axios from "axios";

export const todos = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos",
});
