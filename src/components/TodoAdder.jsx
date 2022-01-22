import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../redux/actions";
import { Box, Button, TextField } from "@material-ui/core";

const TodoAdder = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const titleFieldRef = useRef();

  const addTodo = () => {
    if (title) {
      dispatch({
        type: ADD_TODO,
        payload: {
          title,
        },
      });
      setTitle("");
      titleFieldRef.current.value = "";
    }
  };

  return (
    <Box>
      <TextField
        style={{ width: 400 }}
        inputRef={titleFieldRef}
        label="Add new todo"
        variant="filled"
        onChange={(e) => setTitle(e.target.value)}
      ></TextField>
      <Button
        style={{ height: 55 }}
        variant="contained"
        color="primary"
        onClick={addTodo}
      >
        Add
      </Button>
    </Box>
  );
};

export default TodoAdder;
