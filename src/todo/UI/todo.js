import { useSelector } from "react-redux";
import "./style.css";

function Todo() {
  const todo = useSelector((state) => state.todo);
  return (
    <div className="todo-app">
      <h2>Todo-App</h2>
      <div className="todo-container">
        {todo.map((todo) => {
          return (
            <div className="todo-list" key={todo.id}>
              <p className={`todo-task ${todo.isCompleted && "completed"}`}>
                {todo.task}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
