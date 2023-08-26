import TodoListItem from "./TodoListItem";
import { useState } from "react";
function TodoList(props) {
  console.log(props);
  const { todos } = props;
  console.log(props.delete);
  return (
    <div className="todolist-wrapper">
      {todos.map((todo) => {
        return <TodoListItem data={todo} delete={props.delete} />;
      })}
    </div>
  );
}
export default TodoList;
