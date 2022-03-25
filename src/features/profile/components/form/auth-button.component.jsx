import React from "react";
import { Button, Text } from "native-base";

export const AuthButton = ({ text, onPress, isLoading }) => {
  return (
    <Button isLoading={isLoading} colorScheme="indigo" onPress={onPress}>
      <Text fontSize={18} bold>
        {text}
      </Text>
    </Button>
  );
};
