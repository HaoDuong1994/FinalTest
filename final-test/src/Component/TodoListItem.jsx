function TodoListItem(props) {
  const { title, id } = props.data;
  console.log(id);
  console.log(props);
  return (
    <div>
      <span>{title}</span>
      <span>
        <button
          onClick={() => {
            props.delete(id);
          }}>
          Hoàn thành
        </button>
      </span>
    </div>
  );
}

export default TodoListItem;
