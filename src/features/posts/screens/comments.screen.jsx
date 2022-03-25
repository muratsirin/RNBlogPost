import React from "react";
import { Box, FlatList } from "native-base";
import { CommentInfoCard } from "../components/comment/comment-info-card.component";
import { CommentSection } from "../components/comment/comment-section.component";

export const CommentsScreen = ({ route }) => {
  const { comments } = route.params;

  return (
    <Box
      _dark={{ bg: "dark.50" }}
      _light={{ bg: "blueGray.50" }}
      px={2}
      py={2}
      flex={1}
    >
      <FlatList
        data={comments}
        renderItem={({ item }) => {
          return <CommentInfoCard comment={item.comment} />;
        }}
        keyExtractor={(item) => item.comment.commentId}
      />
      <CommentSection />
    </Box>
  );
};
