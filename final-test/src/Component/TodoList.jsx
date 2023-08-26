import TodoListItem from "./TodoListItem";
import { useState } from "react";
function TodoList(props) {
  console.log(props);
  const { todos } = props;
  return (
    <div className="todolist-wrapper">
      {todos.map((todo) => {
        return <TodoListItem data={todo} />;
      })}
    </div>
  );
}
export default TodoList;
