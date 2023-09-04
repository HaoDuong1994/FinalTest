import { useContext } from "react";
import { TodoContext } from "../App";
function TodoListItem(props) {
  const { title, id } = props.todo;
  const { deleteItem } = useContext(TodoContext);
  return (
    <div>
      <span>{title}</span>
      <span
        style={{
          marginLeft: "32px",
        }}>
        <button
          onClick={() => {
            deleteItem(id);
          }}>
          Hoàn thành
        </button>
      </span>
    </div>
  );
}

export default TodoListItem;
