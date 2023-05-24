import { CircularProgress, Grid, ListItemText } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todos } from "../../api/requests/Tasks";
import { Status } from "../../const/statuses";
import { addAllTasks } from "../../feature/task/taskSlice";

import { Form } from "../Form";
import { Group } from "../Group";
import { ITaskProps } from "../Task";

import styles from "./style.module.scss";

interface ITodo {
  task: {
    tasks: ITaskProps[];
  };
}

export const Todo = () => {
  const tasks = useSelector((state: ITodo) => state.task.tasks);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    todos.get("?_limit=10").then((response) => {
      const tasks = response.data.map((task: ITaskProps) => ({
        ...task,
        status: Status.New,
      }));

      dispatch(addAllTasks(tasks));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <ListItemText
        sx={{ my: 0, py: 4 }}
        primary="Dashboard"
        primaryTypographyProps={{
          fontSize: 30,
          fontWeight: "medium",
          letterSpacing: 0,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      />

      {!isLoading ? (
        <div className={styles.content}>
          <Grid container sx={{ px: 2 }} className={styles.list}>
            {Object.values(Status).map((status) => (
              <Grid key={status} item xs={4}>
                <Group status={status} tasks={tasks} />
              </Grid>
            ))}
          </Grid>

          <Form />
        </div>
      ) : (
        <div className={styles.loader}>
          <CircularProgress />
        </div>
      )}
    </div>
  );
};
