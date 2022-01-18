import React from "react";
import {
  Checkbox,
  ListItem,
  FormControlLabel,
  FormGroup,
} from "@material-ui/core";

const TodoItem = ({ id, title, completed, important }) => {
  const toggleCheckbox = () => {};

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
          label={title}
        ></FormControlLabel>
      </FormGroup>
    </ListItem>
  );
};

export default TodoItem;
