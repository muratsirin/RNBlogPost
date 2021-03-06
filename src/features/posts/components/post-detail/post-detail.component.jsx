import React from "react";
import { Author } from "../author.component";
import { PostDetailBody } from "./post-detail-body.component";
import { PostSocial } from "../post-social.component";
import { Divider, ScrollView } from "native-base";

export const PostDetail = ({ post = {}, navigation }) => {
  const {
    author = { name: "Murat", surname: "Sirin" },
    postTitle,
    postContent,
    image,
    postDate = "25.02.2022 16.00",
    likeCount = "384",
    commentCount = "24",
    comments = [{}],
  } = post;

  return (
    <ScrollView>
      <Author author={author} postDate={postDate} />
      <Divider my="2" />
      <PostDetailBody title={postTitle} photo={image} content={postContent} />
      <Divider my="2" />
      <PostSocial
        likeCount={likeCount}
        commentCount={commentCount}
        navigation={navigation}
        comments={comments}
      />
    </ScrollView>
  );
};
