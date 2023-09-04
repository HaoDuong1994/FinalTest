import { useRef, useState, useEffect } from "react";
import { useContext } from "react";
import { TodoContext } from "../App";

function TodoInput() {
  const inputRef = useRef(null);
  const { addTodo } = useContext(TodoContext);
  return (
    <div className="todoInput-wrapper">
      <input ref={inputRef} type="text" placeholder="add detail" />
      <button
        onClick={() => {
          addTodo(inputRef.current.value);
        }}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
