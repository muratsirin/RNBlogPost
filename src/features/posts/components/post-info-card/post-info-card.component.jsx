import React from "react";
import { Box, Divider, Stack } from "native-base";
import { Author } from "../author.component";
import { PostImage } from "../post-image.component";
import { PostBody } from "./post-body.component";
import { PostSocial } from "../post-social.component";

export const PostInfoCard = ({ post = {}, navigation }) => {
  const {
    author = { name: "Murat", surname: "Sirin" },
    postTitle = "What is Lorem Ipsum?",
    postContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    image,
    postDate,
    likeCount = "384",
    commentCount = "24",
    comments = [{}],
    id,
  } = post;

  console.log(post);
  return (
    <Box paddingTop="4" alignItems="center">
      <Box
        w="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{ borderColor: "coolGray.600", backgroundColor: "dark.100" }}
      >
        <Box>
          <Author author={author} postDate="6 mins ago" />
          <Divider my="1" />
          {image && <PostImage photo={image} />}
        </Box>
        <Stack p="4" space={3}>
          <PostBody title={postTitle} content={postContent} />
          <Divider my="1" />
          <PostSocial
            likeCount={likeCount}
            commentCount={commentCount}
            navigation={navigation}
            comments={comments}
            postId={id}
          />
        </Stack>
      </Box>
    </Box>
  );
};
