import {
  Button,
  Typography,
  TextField,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Status } from "../../const/statuses";
import { addTask } from "../../feature/task/taskSlice";

import styles from "./style.module.scss";

export const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const emptyFields = title === "" || newStatus === "";

  const emptyFieldsToast = () => {
    toast.error("😡 Fields are empty!", {
      position: "top-right",
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !emptyFields ? dispatch(addTask({ title, newStatus })) : emptyFieldsToast();
    handleReset();
  };

  const handleReset = () => {
    setTitle("");
    setNewStatus("");
  };

  const handleChange = (event: SelectChangeEvent) => {
    const status = event.target.value as Status;
    setNewStatus(status);
  };

  return (
    <div className={styles.formWrap}>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "24px",
          textTransform: "uppercase",
        }}
      >
        Add task
      </Typography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          label="Task name"
          color="success"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <FormControl size="small">
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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

        <div className={styles.actions}>
          <Button
            className={styles.btn}
            variant="outlined"
            color="info"
            type="button"
            onClick={handleReset}
          >
            Clear Values
          </Button>
          <Button
            className={styles.btn}
            variant="contained"
            color="success"
            type="submit"
          >
            Success
          </Button>
        </div>
      </form>
    </div>
  );
};
