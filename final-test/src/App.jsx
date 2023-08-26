import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import MainPage from "./page/MainPage";
import ActivePage from "./page/ActivePage";
import TodoMenu from "./Component/TodoMenu";
import CompletePage from "./page/CompletePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  useEffect(() => {
    document.title = "Todo App";
  }, []);
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Router>
        <div className="todo-wrapper">
          <h2>#todo</h2>
          <TodoMenu />
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/active" element={<ActivePage />} />
          <Route path="/complete" element={<CompletePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
