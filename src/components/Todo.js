import { useDispatch } from "react-redux";
import classNames from "classnames";
import { toggleTodo } from "../redux/actions";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  todoCompleted: {
    textDecoration: 'line-through',
    color: 'lightgray'
  }
}));

const Todo = ({ todo }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <span className={classNames({[classes.todoCompleted]: todo.completed})}>
        {todo.content}
      </span>
      <Button onClick={() => dispatch(toggleTodo(todo.id))}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
      </Button>
    </Card>
  );
};

export default Todo;
