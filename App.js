import React, { useEffect } from "react";
import "./src/config/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Navigation } from "./src/infrastructure/navigation";
import { PostsContextProvider } from "./src/services/posts/posts.context";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { LogBox } from "react-native";
import { onAuthStateChange } from "./src/redux/authentication/authentication.slice";

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  // const auth = getAuth();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     dispatch(onAuthStateChange(user));
  //   });
  // }, [auth, dispatch]);

  return (
    <NativeBaseProvider theme={theme}>
      <PostsContextProvider>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </PostsContextProvider>
    </NativeBaseProvider>
  );
}
