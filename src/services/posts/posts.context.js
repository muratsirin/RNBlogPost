import React, { useState, createContext, useEffect } from "react";
import { postsRequest, postsTransform } from "./posts.service";

export const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErorr] = useState(null);

  const retrievePosts = () => {
    setIsLoading(true);
    setPosts([]);

    setTimeout(() => {
      postsRequest()
        .then(postsTransform)
        .then((results) => {
          setIsLoading(false);
          setPosts(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setErorr(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrievePosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, isLoading, error }}>
      {children}
    </PostsContext.Provider>
  );
};
