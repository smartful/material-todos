import React from "react";
import { useSelector } from "react-redux";
import { Box, Divider, Grid, List, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "#DDD",
  },
}));

const TodosContainer = () => {
  const classes = useStyles();

  const { todos } = useSelector((state) => ({
    todos: state.todos,
  }));

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {todos &&
              todos.map((todo) => <div key={todo.id}>{todo.title}</div>)}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodosContainer;
