import TodoInput from "../Component/TodoInput";
import TodoList from "../Component/TodoList";
import TodoMenu from "../Component/TodoMenu";
import { createContext, useContext } from "react";
import { useEffect, useState, useRef } from "react";
import { TodoContext } from "../App";
function MainPage() {
  const test = useContext(TodoContext);
  console.log(test);
  return (
    <div>
      <hr className="horizon"></hr>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default MainPage;
