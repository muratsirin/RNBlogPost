import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const postsRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mocks;

    if (!mock) {
      reject("Posts not found");
    }
    resolve(mock);
  });
};

export const postsTransform = ({ results = [] }) => {
  const mappedResult = results.map((post) => {
    post.photos = post.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });

    return {
      ...post,
      title: post.post_title,
      content: post.post_content,
      likeCount: post.like_count,
      id: post.post_id,
      commentId: post.comments.comment_id,
    };
  });

  return camelize(mappedResult);
};
