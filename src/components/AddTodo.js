import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginRight: theme.spacing(1),
    },
    alignItems: 'flex-end',
    display: 'flex'
  },
}));

const AddTodo = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { register, handleSubmit, errors, setValue } = useForm();

  const onSubmit = (data) => {
    dispatch(addTodo(data.todo_name));
    setValue('todo_name', '');
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className={classes.root}
    >
      <TextField
        label="Todo Name"
        name="todo_name"
        inputRef={register({ required: true })}
        error={Boolean(errors.todo_name)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Add Todo
      </Button>
    </form>
  );
};

export default AddTodo;
