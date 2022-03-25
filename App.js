import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Navigation } from "./src/infrastructure/navigation";
import { PostsContextProvider } from "./src/services/posts/posts.context";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <PostsContextProvider>
        <Navigation />
      </PostsContextProvider>
    </NativeBaseProvider>
  );
}
