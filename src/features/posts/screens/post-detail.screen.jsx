import React from "react";
import { Box } from "native-base";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { PostDetail } from "../components/post-detail/post-detail.component";

export const PostDetailScreen = ({ route, navigation }) => {
  const { post } = route.params;

  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
    >
      <SafeArea />
      <PostDetail post={post} navigation={navigation} />
    </Box>
  );
};