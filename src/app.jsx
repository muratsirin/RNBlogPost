import React, { useEffect } from "react";
import { Navigation } from "./infrastructure/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { onAuthStateChange } from "./redux/authentication/authentication.slice";
import { getPosts } from "./redux/post/post.actions";

export const App = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch(onAuthStateChange(user ? user.providerData : ""));
    });
  }, [auth, dispatch]);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return <Navigation />;
};
