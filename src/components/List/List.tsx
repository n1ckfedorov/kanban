import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { Item, ItemProps } from "../Item";
import { useEffect, useState } from "react";
import { todos } from "../../api/requests/Tasks";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../store/tasks/actions";

//TODO
interface ItemsProps {
  tasks: [ItemProps];
}

export const TodoList = () => {
  const tasks = useSelector((state: ItemsProps) => state.tasks);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  //TODO
  useEffect(() => {
    todos.get("?_limit=10").then((response) => {
      dispatch(addTask(response.data));
      setIsLoading(false);
    });
  }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", padding: "20px 0 " }}
      >
        {!isLoading && (
          <List sx={{ flexGrow: 1, maxWidth: "500px" }}>
            {tasks.map((task) => (
              <Item
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
              />
            ))}
          </List>
        )}
      </Grid>
    </Box>
  );
};
