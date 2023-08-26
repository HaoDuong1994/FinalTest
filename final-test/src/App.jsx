import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import TodoMenu from "./Component/TodoMenu";
import TodoInput from "./Component/TodoInput";
import TodoList from "./Component/TodoList";
function App() {
  useEffect(() => {
    document.title = "Todo App";
  }, []);

  return (
    <>
      <div className="todo-wrapper">
        <h2>#todo</h2>
        <TodoMenu />
        <hr className="horizon"></hr>
        <TodoInput />
        <TodoList />
      </div>
    </>
  );
}

export default App;
