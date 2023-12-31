export default function TodoItem({item, index, setTodo}) {
  const onChange = (e) => {
    setTodo((prevTodo) =>{
      const nextTodo = [...prevTodo];
      nextTodo[index] = {...nextTodo[index]};
      nextTodo[index].completed = e.target.checked;
      return nextTodo;
    })
  };
  return (
    <div className="item">
      <input type="checkbox" checked={item.completed} onChange={onChange} />
      {item.title}
    </div>
  );
}