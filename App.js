import React from "react";
import "./src/config/firebase.config";
import { NativeBaseProvider, extendTheme } from "native-base";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import { LogBox } from "react-native";
import { App as SrcApp } from "./src/app";

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
      <Provider store={store}>
        <SrcApp />
      </Provider>
    </NativeBaseProvider>
  );
}
