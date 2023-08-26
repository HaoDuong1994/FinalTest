import TodoInput from "../Component/TodoInput";
import TodoList from "../Component/TodoList";
import TodoMenu from "../Component/TodoMenu";
import { useEffect, useState, useRef } from "react";
function MainPage() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  //
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //
  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        title: title,
        isComplete: false,
      },
    ]);
  };
  return (
    <div>
      <hr className="horizon"></hr>
      <TodoInput add={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default MainPage;
