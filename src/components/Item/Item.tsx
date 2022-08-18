import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Checkbox from "@mui/material/Checkbox";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../../store/tasks/actions";

export interface ItemProps {
  id: number;
  title: string;
  completed: boolean;
}

export const Item: FC<ItemProps> = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <AssignmentIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} />
      <IconButton aria-label="delete">
        <DeleteIcon
          onClick={() => {
            dispatch(removeTask(id));
          }}
        />
      </IconButton>
      <Checkbox defaultChecked={completed ? true : false} />
    </ListItem>
  );
};
