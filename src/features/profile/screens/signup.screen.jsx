import React, { useState } from "react";
import { AuthButton } from "../components/form/auth-button.component";
import { FormHeading } from "../components/form/form-heading.component";
import { FormControl } from "../components/form/form-control.component";
import { FormLink } from "../components/form/form-link.component";
import { Box, Text, VStack, HStack, Center } from "native-base";

export const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <Box
      safeArea
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      flex={1}
      justifyContent="center"
    >
      <Center w="100%">
        <Box w="90%" maxW="290">
          <FormHeading />
          <VStack space={3} mt="5">
            <HStack w="48%" space={3}>
              <FormControl
                label="Name"
                value={name}
                onChangeText={(value) => setName(value)}
              />
              <FormControl
                label="Surname"
                value={surname}
                onChangeText={(value) => setSurname(value)}
              />
            </HStack>
            <FormControl
              label="Email"
              value={email}
              onChangeText={(value) => setEmail(value)}
            />
            <FormControl
              label="Password"
              type="password"
              value={password}
              onChangeText={(value) => setPassword(value)}
            />
            <AuthButton text="Sign up" isLoading={false} onPress={() => {}} />
          </VStack>
          <HStack mt="6" justifyContent="center">
            <Text>Already have a account? </Text>
            <FormLink text="Sign in" />
          </HStack>
        </Box>
      </Center>
    </Box>
  );
};
