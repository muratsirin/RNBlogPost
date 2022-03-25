import React from "react";
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

export const SearchBar = () => {
  return (
    <Input
      placeholder="Search posts"
      width="100%"
      borderRadius="4"
      py="3"
      px="1"
      fontSize="14"
      InputLeftElement={
        <Icon
          m="2"
          mr="3"
          size="6"
          color="gray.400"
          as={<MaterialIcons name="search" />}
        />
      }
    />
  );
};
