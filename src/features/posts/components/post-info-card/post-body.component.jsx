import React from "react";
import { Stack, Text, Heading } from "native-base";

export const PostBody = ({ title, content }) => {
  return (
    <>
      <Stack space={2}>
        <Heading size="md" ml="-1">
          {title}
        </Heading>
      </Stack>
      <Text fontWeight="400">{content}</Text>
    </>
  );
};
