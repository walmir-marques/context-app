import { PostContext } from "@/contexts/postContext";
import React, { useContext } from "react";

export const PostList = () => {
  const postCtx = useContext(PostContext);
  const handleRemovePost = (id) => {
    postCtx?.removePost(id);
  };

  return (
    <div>
      {postCtx?.posts.map((item) => (
        <div key={item.id} className="border-b border-gray-500 p-3">
          <div className="text-xl font-bold mb-2">{item.title}</div>
          <div className="text-sm">{item.text}</div>
          <button onClick={() => handleRemovePost(item.id)}>
            [ Remover Post ]
          </button>
        </div>
      ))}
    </div>
  );
};
