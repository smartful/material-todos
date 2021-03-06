import React from "react";
import { useSelector } from "react-redux";
import { Box, Divider, Grid, List, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import TodoItem from "./TodoItem";

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

  const prioritise = () => {
    const importantTodos = todos.filter((todo) => todo.important === true);
    const notImportantTodos = todos.filter((todo) => todo.important === false);

    return importantTodos.concat(notImportantTodos);
  };

  const prioritisedTodos = prioritise();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos &&
              prioritisedTodos.map((todo) => {
                if (!todo.completed) {
                  return <TodoItem key={todo.id} {...todo} />;
                }

                return null;
              })}
          </List>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos &&
              prioritisedTodos.map((todo) => {
                if (todo.completed) {
                  return <TodoItem key={todo.id} {...todo} />;
                }

                return null;
              })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodosContainer;
