import React from "react";
import { Stack, Text } from "native-base";
import { AuthButton } from "../form/auth-button.component";

export const Auth = ({ navigation }) => {
  return (
    <Stack space={4}>
      <Text>For see your profile please login or register </Text>
      <AuthButton
        text="Sign in"
        onPress={() => navigation.navigate("SigninScreen")}
      />
      <AuthButton
        text="Sign up"
        onPress={() => navigation.navigate("SignupScreen")}
      />
    </Stack>
  );
};
