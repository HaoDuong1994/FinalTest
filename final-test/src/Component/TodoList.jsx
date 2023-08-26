import TodoListItem from "./TodoListItem";
function TodoList() {
  const todos = [
    {
      id: 1,
      title: "Do cording Challenges",
      isComplete: false,
    },
    {
      id: 2,
      title: "Do second cording Challenges",
      isComplete: false,
    },
    {
      id: 3,
      title: "Do second cording Challenges",
      isComplete: false,
    },
    {
      id: 4,
      title: "Do second cording Challenges",
      isComplete: false,
    },
  ];
  return (
    <div className="todolist-wrapper">
      {todos.map((todo) => {
        return <TodoListItem data={todo} />;
      })}
    </div>
  );
}
export default TodoList;
