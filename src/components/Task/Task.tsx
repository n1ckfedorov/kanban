import AssignmentIcon from "@mui/icons-material/Assignment";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { blue, red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Status } from "../../const/statuses";
import { editTaskStatus, removeTask } from "../../feature/task/taskSlice";

export interface ITaskProps {
  id: number;
  title: string;
  completed: boolean;
  status: Status;
}

export const Task: FC<ITaskProps> = ({ id, title, status }) => {
  const dispatch = useDispatch();
  const [newStatus, setNewStatus] = useState(status);

  const handleChange = (event: SelectChangeEvent) => {
    const newStatus = event.target.value as Status;

    setNewStatus(newStatus);
    dispatch(editTaskStatus({ id, status: newStatus }));
  };

  const removeCurrentTask = () => {
    dispatch(removeTask({ id }));
    toast.success("🦄 Task removed!", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: blue[300] }}>
          <AssignmentIcon htmlColor="white" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} />
      <IconButton
        aria-label="delete"
        sx={{ color: red[500] }}
        onClick={removeCurrentTask}
      >
        <DeleteIcon />
      </IconButton>
      {status !== Status.Done && (
        <FormControl sx={{ m: 1, minWidth: 130 }} size="small">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={newStatus}
            label="Status"
            onChange={handleChange}
          >
            {Object.values(Status).map((status) => (
              <MenuItem key={status} value={status}>
                {status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </ListItem>
  );
};
