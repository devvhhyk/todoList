import { useState } from "react";

export default function TodoForm({ onSubmit: onParentSubmit }) {
  const [newTodo, setNewTodo] = useState("");

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    onParentSubmit(newTodo)
  }

  return (
    <form onSubmit={onSubmit}>
      <input className="inp" value={newTodo} onChange={onChangeNewTodo} />
      <button className="btn">추가</button>
    </form>
  );
}
