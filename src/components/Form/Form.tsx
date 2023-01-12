import { Button, Typography, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/tasks/actions";

import styles from "./style.module.scss";

export const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    title !== "" && dispatch(addTask(title));
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
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <div className={styles.actions}>
          <Button
            className={styles.btn}
            variant="outlined"
            color="info"
            type="reset"
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
