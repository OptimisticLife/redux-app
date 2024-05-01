import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import Todo from "./UI/todo";

const store = createStore(reducer);

export default function TodoApp() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
