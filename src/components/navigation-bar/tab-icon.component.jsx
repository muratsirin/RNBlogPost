import React from "react";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Icon } from "native-base";

export const TabIcon = ({ name, isSelected }) => {
  const TAB_ICON = {
    Home: isSelected ? "home" : "home-outline",
    Discover: "search",
    Favourites: isSelected ? "heart" : "heart-outline",
    Profile: isSelected ? "account" : "account-outline",
  };
  const iconName = TAB_ICON[name];

  return (
    <Icon
      mb="1"
      as={
        iconName !== "search" ? (
          <MaterialCommunityIcons name={iconName} size={24} />
        ) : (
          <MaterialIcons name={iconName} />
        )
      }
      color="white"
      size="sm"
    />
  );
};
