import React from "react";
import { useDispatch } from "react-redux";
import { TOGGLE_COMPLETED } from "../redux/actions";
import {
  Checkbox,
  ListItem,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@material-ui/core";

const TodoItem = ({ id, title, completed, important }) => {
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: { id },
    });
  };

  return (
    <ListItem dense>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={completed}
              onChange={toggleCheckbox}
              name={title}
              color="primary"
            />
          }
          label={
            <Typography
              style={{
                textDecoration: completed ? "line-through" : "",
              }}
            >
              {title}
            </Typography>
          }
        ></FormControlLabel>
      </FormGroup>
    </ListItem>
  );
};

export default TodoItem;
