import { usePosts } from "@/contexts/postContext";
import { useState } from "react";

export const Header = () => {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const postCtx = usePosts();

  const handleAddPost = () => {
    if (titleInput && contentInput) {
      postCtx?.addPost(titleInput, contentInput);
    }
    setContentInput("");
    setTitleInput("");
  };

  return (
    <header>
      <h1 className="text-3xl">O Título da Página.</h1>
      <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 p-3 my-4">
        <input
          className="border border-gray-300 p-2 text-black text-xl"
          type="text"
          placeholder="Digite um título ..."
          value={titleInput}
          onChange={(e) => setTitleInput(e.target.value)}
        />
        <textarea
          className="h-24 border border-gray-300 p-2 text-black text-xl"
          placeholder="Digite o conteúdo do post ... "
          value={contentInput}
          onChange={(e) => setContentInput(e.target.value)}
        ></textarea>
        <button
          onClick={handleAddPost}
          className="bg-blue-500 p-3 text-white rounded-md"
        >
          Adicionar
        </button>
      </div>
    </header>
  );
};
