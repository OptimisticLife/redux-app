import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import PostApp from "./post";
import TodoApp from "./todo/index";
import { UPDATE_THEME } from "./apprReducer";

function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  function btnHandler() {
    dispatch({
      type: UPDATE_THEME,
      theme: (theme === "" && "light") || theme === "dark" ? "light" : "dark",
    });
  }

  return (
    <div
      className={`App appdefault ${
        theme !== "" && (theme === "dark" ? "dark" : "light")
      }`}
    >
      <button
        onClick={btnHandler}
        className={`btndefault ${
          theme !== "" && (theme === "dark" ? "light" : "dark")
        }`}
      >
        Change Theme
      </button>
      <TodoApp />
      <PostApp />
    </div>
  );
}

export default App;
