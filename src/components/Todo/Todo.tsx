import { Typography } from "@mui/material";
import { TodoList } from "../List";

export const Todo = () => {
  return (
    <>
      <Typography sx={{ textAlign: "center", padding: "20px" }}>
        Todo List
      </Typography>
      <TodoList />
    </>
  );
};
