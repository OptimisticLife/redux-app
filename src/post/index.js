import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import Post from "./UI/post";

const store = createStore(reducer);

export default function PostApp() {
  return (
    <Provider store={store}>
      <Post />
    </Provider>
  );
}
