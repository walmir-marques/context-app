import { usePosts } from "@/contexts/postContext";
import React from "react";

export const Footer = () => {
  const postCtx = usePosts();

  return <footer>O total de posts é: {postCtx?.posts.length} </footer>;
};
