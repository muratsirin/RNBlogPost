import React from "react";
import { HStack, VStack, Text, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const SocialIcon = ({ icon, text }) => {
  return (
    <VStack alignItems="center">
      <Icon color="indigo.600" size="md" as={<MaterialIcons name={icon} />} />

      <Text color="white" fontWeight="400">
        {text}
      </Text>
    </VStack>
  );
};

export const PostSocial = ({
  comments,
  likeCount,
  commentCount,
  navigation,
}) => {
  return (
    <HStack alignItems="center" space={4} justifyContent="space-between">
      <SocialIcon icon="thumb-up-off-alt" text={likeCount} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Comments", { comments: comments })}
      >
        <SocialIcon icon="comment" text={commentCount} />
      </TouchableOpacity>
      <SocialIcon icon="share" text="share" />
    </HStack>
  );
};
