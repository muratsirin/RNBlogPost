import React from "react";
import { Box, Icon, HStack, Heading, Pressable } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ProfileMenuCard = ({ title, iconName, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Box
        h={50}
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        justifyContent="center"
        _dark={{ borderColor: "coolGray.600", backgroundColor: "dark.100" }}
      >
        <HStack alignItems="center" space={4}>
          <Icon size="md" as={<MaterialCommunityIcons name={iconName} />} />
          <Heading size="md">{title}</Heading>
        </HStack>
      </Box>
    </Pressable>
  );
};
