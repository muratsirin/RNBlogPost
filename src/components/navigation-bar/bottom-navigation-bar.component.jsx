import React from "react";
import { Text, HStack, Center, Pressable } from "native-base";
import { TabIcon } from "./tab-icon.component";

export const BottomNavigationBar = ({ state, descriptors, navigation }) => {
  return (
    <HStack bg="indigo.600" alignItems="center">
      {state.routes.map((route, index) => {
        const isSelected = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isSelected && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <Pressable
            key={route.name}
            opacity={isSelected ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={onPress}
          >
            <Center>
              <TabIcon name={route.name} isSelected={isSelected} />
              <Text color="white" fontSize="12">
                {route.name}
              </Text>
            </Center>
          </Pressable>
        );
      })}
    </HStack>
  );
};
