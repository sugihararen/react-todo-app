import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TodoList = () => {
  const todos = useSelector(state => {
    const visibilityFilter = state.visibilityFilter;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return todos;
  });
  return (
    <>
      {todos &&
        todos.map((todo, _) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        }
    </>
  );
};

export default TodoList;
