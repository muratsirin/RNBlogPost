import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectError } from "../../../redux/authentication/authentication.slice";
import { signUp } from "../../../redux/authentication/authentication.actions";
import { AuthButton } from "../components/form/auth-button.component";
import { FormHeading } from "../components/form/form-heading.component";
import { FormControl } from "../components/form/form-control.component";
import { FormLink } from "../components/form/form-link.component";
import { Box, Text, VStack, HStack, Center } from "native-base";

export const SignupScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [user, setUser] = useState({});

  const onPress = () => {
    dispatch(signUp(user));
    if (!error) {
      navigation.navigate("Profile");
    }
  };

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
                value={user.name}
                onChangeText={(name) => setUser({ ...user, name: name })}
              />
              <FormControl
                label="Surname"
                value={user.surname}
                onChangeText={(surname) =>
                  setUser({ ...user, surname: surname })
                }
              />
            </HStack>
            <FormControl
              label="Email"
              value={user.email}
              onChangeText={(email) => setUser({ ...user, email: email })}
            />
            <FormControl
              label="Password"
              type="password"
              value={user.password}
              onChangeText={(password) =>
                setUser({ ...user, password: password })
              }
            />
            <AuthButton text="Sign up" isLoading={false} onPress={onPress} />
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
