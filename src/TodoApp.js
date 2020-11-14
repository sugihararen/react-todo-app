import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function TodoApp() {
  return (
    <Grid container justify="center">
      <div>
        <Typography variant="h3" gutterBottom>
          Todo List
        </Typography>
        <AddTodo />
        <VisibilityFilters />
        <TodoList />
      </div>
    </Grid>
  );
}
