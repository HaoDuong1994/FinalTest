import { useContext } from "react";
import { TodoContext } from "../App";
function ActivePage() {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <div>{todo.title}</div>
          </div>
        );
      })}
    </div>
  );
}
export default ActivePage;
