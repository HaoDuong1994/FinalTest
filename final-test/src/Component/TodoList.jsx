import TodoListItem from "./TodoListItem";
import { useState, useContext } from "react";
import { TodoContext } from "../App";
function TodoList() {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <div className="todolist-wrapper">
      {todos.map((todo, index) => {
        return <TodoListItem key={crypto.randomUUID()} todo={todo} />;
      })}
    </div>
  );
}
export default TodoList;
