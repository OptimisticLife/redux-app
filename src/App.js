import "./App.css";
import PostApp from "./post";
import TodoApp from "./todo/index";

function App() {
  return (
    <div className="App">
      <TodoApp />
      <PostApp />
    </div>
  );
}

export default App;
