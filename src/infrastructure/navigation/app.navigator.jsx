import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { PostsNavigator } from "./posts.navigator";
import { PostsContextProvider } from "../../services/posts/posts.context";
import { SafeArea } from "../../components/utility/safe-area.component";
import { Text, VStack } from "native-base";
import { BottomNavigationBar } from "../../components/navigation-bar/bottom-navigation-bar.component";
import { ProfileScreen } from "../../features/profile/screens/profile.screen";
import { SigninScreen } from "../../features/profile/screens/signin.screen";
import { SignupScreen } from "../../features/profile/screens/signup.screen";
import { AddPostScreen } from "../../features/posts/screens/add-post.screen";
import { appScreenOptions } from "./screen-options";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Discover = () => {
  return (
    <VStack
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <SafeArea />
      <Text>Discover Screen</Text>
    </VStack>
  );
};

const Favourites = () => {
  return (
    <VStack
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
      alignItems="center"
      justifyContent="center"
    >
      <SafeArea />
      <Text>Favourites Screen</Text>
    </VStack>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomNavigationBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Home" component={PostsNavigator} />
      <Tab.Screen name="Discover" component={Discover} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Group>
      <Stack.Group screenOptions={appScreenOptions}>
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="AddPost" component={AddPostScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
