import React from "react";
import { HStack, Avatar, Text, VStack } from "native-base";

export const Author = ({ author, postDate }) => {
  return (
    <HStack padding="1" space={2}>
      <Avatar
        size="md"
        source={{
          uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }}
      />
      <VStack>
        <Text fontSize="md">Murat</Text>
        <HStack alignItems="center">
          <Text
            color="coolGray.600"
            _dark={{ color: "warmGray.400" }}
            fontWeight="400"
          >
            {postDate}
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};
