import React from "react";
import { Stack, Text, Heading } from "native-base";
import { PostImage } from "../post-image.component";

export const PostDetailBody = ({ title, photo, content }) => {
  return (
    <Stack space={2}>
      <Heading size="md">{title}</Heading>
      <PostImage photo={photo} />
      <Text fontWeight="400">{content}</Text>
    </Stack>
  );
};
