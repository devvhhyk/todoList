import "./App.css";
import { useState } from "react";
import TodoForm from "./Todo/TodoForm";
import TodoItem from "./Todo/TodoItem";

function App() {
  const [todo, setTodo] = useState([]);

  const onSubmit = (newTodo) => {
    const nextTodo = [
      ...todo,
      { title: newTodo, completed: false, id: Math.random() },
    ];
    setTodo(nextTodo);
  };

  return (
    <div className="full">
      <div className="App title">TodoList</div>
      <div className="App">
        {todo.length === 0 ? (
          <div>
            <TodoForm onSubmit={onSubmit} />
            <div className="add">할일을 추가하세요</div>
            
          </div>
        ) : (
          <>
            {todo.map((t, i) => (
              <TodoItem key={t.id} index={i} item={t} setTodo={setTodo} />
            ))}
            <TodoForm onSubmit={onSubmit} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
