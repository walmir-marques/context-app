import { PostContext } from "@/contexts/postContext";
import React from "react";
import { useContext } from "react";

export const Footer = () => {
  const postCtx = useContext(PostContext);

  return <footer>O total de posts é: {postCtx?.posts.length} </footer>;
};
