import React from "react";
import { AspectRatio, Image } from "native-base";

export const PostImage = ({ photo }) => {
  return (
    <AspectRatio w="100%" ratio={16 / 9}>
      <Image
        source={{
          uri: photo,
        }}
        alt="image"
      />
    </AspectRatio>
  );
};
