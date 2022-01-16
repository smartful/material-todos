import React from "react";
import TodoAdder from "./components/TodoAdder";
import TodosContainer from "./components/TodosContainer";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  appContainer: {
    paddingLeft: 100,
    paddingRight: 100,
    marginTop: 100,
  },
  wrapper: {
    textAlign: "center",
    width: "100%",
  },
}));

const Todos = () => {
  const classes = useStyle();

  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start">
            <img
              src="logo.png"
              style={{ width: "50px" }}
              alt="Material Todos"
            ></img>
          </IconButton>
          <Typography variant="h5">Todos</Typography>
        </Toolbar>
      </AppBar>

      <Container className={classes.appContainer}>
        <Paper className={classes.wrapper} elevation={0}>
          <TodoAdder />
          <TodosContainer />
        </Paper>
      </Container>
    </Box>
  );
};

export default Todos;
