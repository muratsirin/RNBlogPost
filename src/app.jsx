import React, { useEffect } from "react";
import { PostsContextProvider } from "./services/posts/posts.context";
import { Navigation } from "./infrastructure/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onAuthStateChange } from "./redux/authentication/authentication.slice";

export const App = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(onAuthStateChange(user ? user.providerData : ""));
    });
  }, [auth, dispatch]);

  return (
    <PostsContextProvider>
      <Navigation />
    </PostsContextProvider>
  );
};
