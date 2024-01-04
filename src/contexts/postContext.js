import { postReducer } from "@/reducers/postReducer";

const { createContext, useReducer } = require("react");

export const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, []);
  const addPost = (title, text) => {
    dispatch({ type: "add", payload: { title, text } });
  };

  const removePost = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };

  return (
    <PostContext.Provider value={{ posts, addPost, removePost }}>
      {children}
    </PostContext.Provider>
  );
};
