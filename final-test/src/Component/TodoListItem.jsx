function TodoListItem(props) {
  const { title } = props.data;
  return (
    <div>
      <span>{title}</span>
      <span>
        <button>Hoàn thành</button>
      </span>
    </div>
  );
}

export default TodoListItem;
