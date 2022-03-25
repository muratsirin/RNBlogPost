import React from "react";
import { Heading, Center } from "native-base";

export const FormHeading = () => {
  return (
    <Center>
      <Heading
        size="lg"
        fontWeight="600"
        color="coolGray.600"
        _dark={{ color: "warmGray.200" }}
        bold
      >
        Welcome
      </Heading>
    </Center>
  );
};
