import React from "react";
import { useDispatch } from "react-redux";
import { DELETE_TODO, TOGGLE_COMPLETED } from "../redux/actions";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoItem = ({ id, title, completed, important }) => {
  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: id,
    });
  };

  const handleDeleteClick = () => {
    dispatch({
      type: DELETE_TODO,
      payload: id,
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
      <ListItemSecondaryAction>
        <IconButton onClick={handleDeleteClick} edge="end">
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
