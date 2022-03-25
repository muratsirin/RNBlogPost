import React from "react";
import { IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const appScreenOptions = ({ navigation }) => {
  return {
    title: "",
    headerLeft: (props) => (
      <IconButton
        onPress={() => navigation.goBack()}
        ml={1}
        colorScheme="indigo"
        _icon={{ as: Ionicons, name: "ios-chevron-back" }}
      />
    ),
    headerStyle: {
      elevation: 0,
      backgroundColor: "#18181b",
    },
  };
};

export const postScreenOptions = () => {
  return {
    headerShown: false,
    presentation: "modal",
  };
};
