import { CircularProgress, Grid, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../../api/requests/Tasks";
import { Status } from "../../const/statuses";
import { addAllTasks } from "../../store/tasks/actions";
import { Form } from "../Form";
import { Group } from "../Group";
import { ITaskProps } from "../Task";

interface ITodo {
  tasks: ITaskProps[];
}

export const Todo = () => {
  const tasks = useSelector((state: ITodo) => state.tasks);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  //TODO
  useEffect(() => {
    todos.get("?_limit=6").then((response) => {
      const tasks = response.data.map((task: ITaskProps) => ({
        ...task,
        status: Status.New,
      }));
      dispatch(addAllTasks(tasks));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      <ListItemText
        sx={{ my: 0 }}
        primary="Kanban 🥹"
        primaryTypographyProps={{
          fontSize: 30,
          marginY: "30px",
          fontWeight: "medium",
          letterSpacing: 0,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      />
      {!isLoading ? (
        <Grid container>
          {Object.values(Status).map((status) => (
            <Grid key={status} item xs={4}>
              <Group status={status} tasks={tasks} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <CircularProgress />
      )}
      <Form />
    </>
  );
};
