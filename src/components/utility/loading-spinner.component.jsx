import React from "react";
import { HStack, Spinner, Heading } from "native-base";

export const LoadingSpinner = () => {
  return (
    <HStack space={2}>
      <Spinner />
      <Heading color="primary.500" fontSize="md">
        Loading
      </Heading>
    </HStack>
  );
};
