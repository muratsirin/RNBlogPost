import React from "react";
import { Box, VStack, HStack, Spacer, Text, Avatar } from "native-base";

export const CommentInfoCard = ({ comment = {} }) => {
  const { user, content } = comment;
  return (
    <Box
      borderBottomWidth="1"
      _dark={{ borderColor: "gray.600" }}
      borderColor="coolGray.200"
      pl="2"
      pr="2"
      py="2"
    >
      <HStack space={3} justifyContent="space-between">
        <Avatar
          size="48px"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <VStack>
          <Text _dark={{ color: "indigo.600" }} color="coolGray.800" bold>
            {`${user.name} ${user.surname}`}
          </Text>
          <Text _dark={{ color: "warmGray.200" }} color="coolGray.600">
            {content}
          </Text>
        </VStack>
        <Spacer />
        <Text
          fontSize="xs"
          _dark={{ color: "warmGray.50" }}
          color="coolGray.800"
          alignSelf="flex-start"
        >
          18:30
        </Text>
      </HStack>
    </Box>
  );
};
