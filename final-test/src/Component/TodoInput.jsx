import { useRef, useState, useEffect } from "react";

function TodoInput(props) {
  const inputRef = useRef(null);
  console.log(props);
  return (
    <div className="todoInput-wrapper">
      <input ref={inputRef} type="text" placeholder="add detail" />
      <button
        onClick={() => {
          props.add(inputRef.current.value);
        }}>
        Add
      </button>
    </div>
  );
}

export default TodoInput;
