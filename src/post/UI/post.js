import { useSelector } from "react-redux";
import "./style.css";

function Post() {
  const todo = useSelector((state) => state.post);
  return (
    <div className="post-app">
      <h2>Post-App</h2>
      <div className="post-container">
        {todo.map((post) => {
          return (
            <div className="post" key={post.id}>
              <p className="post-title">{post.title}</p>
              <p className="post-desc">{post.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Post;
