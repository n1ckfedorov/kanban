import { Alert, ListItem, ListItemText } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { FC } from "react";
import { Status } from "../../const/statuses";
import { ITaskProps, Task } from "../Task";

//TODO

interface Igroup {
  status: Status;
  tasks: ITaskProps[];
}

export const Group: FC<Igroup> = ({ status, tasks }) => {
  const taskInStatus = tasks?.filter((task) => task.status === status);

  return (
    <Box sx={{ flexGrow: 1, height: "100%" }}>
      <ListItem>
        <ListItemText
          sx={{ my: 0 }}
          primary={[status, " " + taskInStatus?.length]}
          primaryTypographyProps={{
            fontSize: 20,
            fontWeight: "medium",
            letterSpacing: 0,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        />
      </ListItem>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px 0 ",
        }}
      >
        {taskInStatus?.length > 0 ? (
          <List sx={{ flexGrow: 1, maxWidth: "500px" }}>
            {taskInStatus.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                status={task.status}
              />
            ))}
          </List>
        ) : (
          <Alert severity="success"> {status} status - is empty </Alert>
        )}
      </Grid>
    </Box>
  );
};
