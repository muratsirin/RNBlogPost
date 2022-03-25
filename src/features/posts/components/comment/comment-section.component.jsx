import React from "react";
import { Box, HStack, Avatar, Input, IconButton, Button } from "native-base";
import { Ionicons } from "@expo/vector-icons";

export const CommentSection = () => {
  return (
    <Box
      borderTopWidth="1"
      _dark={{ borderColor: "gray.600" }}
      borderColor="coolGray.200"
      pl="2"
      pr="2"
      py="2"
    >
      <HStack space={2} alignItems="center">
        <Avatar
          size="md"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <Input
          _dark={{ borderColor: "indigo.600" }}
          w="75%"
          variant="outline"
          placeholder="Make a comment"
          multiline
        />
        <IconButton
          size="sm"
          variant="solid"
          colorScheme="indigo"
          _icon={{
            as: Ionicons,
            name: "send",
            color: "white",
          }}
        />
      </HStack>
    </Box>
  );
};
