import { useState } from "react";
import app from "./firebase";
import "./App.css";
import { useEffect, useContext, createContext } from "react";
import MainPage from "./page/MainPage";
import ActivePage from "./page/ActivePage";
import TodoMenu from "./Component/TodoMenu";
import CompletePage from "./page/CompletePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export const TodoContext = createContext();
console.log(TodoContext);
import { getDatabase, ref, child, get } from "firebase/database";

function App() {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `ueser/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        const data = snapshot.toJSON();
        console.log(data);
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
  useEffect(() => {
    document.title = "Todo App";
  }, []);
  const [todos, setTodos] = useState([]);

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

  const deleteItem = (id) => {
    const filterTodoItem = todos.filter((todoItem) => {
      return todoItem.id !== id;
    });
    setTodos(filterTodoItem);
  };

  return (
    <>
      <Router>
        <TodoContext.Provider
          value={{
            todos,
            deleteItem,
            addTodo,
          }}>
          <div className="todo-wrapper">
            <h2>#todo</h2>
            <TodoMenu />
          </div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/active" element={<ActivePage />} />
            <Route path="/complete" element={<CompletePage />} />
          </Routes>
        </TodoContext.Provider>
      </Router>
    </>
  );
}

export default App;
