import { setPosts, loading, onError } from "./post.slice";
import {
  getPostsRequest,
  addPostRequest,
  addCommentToPostRequest,
} from "../../services/posts/post.service";

export const addPost = (post) => (dispatch) => {
  dispatch(loading(true));
  addPostRequest(post)
    .then(() => {
      dispatch(loading(false));
    })
    .catch((error) => {
      dispatch(loading(false));
      dispatch(onError(error.toString()));
    });
};

export const addCommentToPost = (comment) => (dispatch) => {
  dispatch(loading(true));
  addCommentToPostRequest(comment)
    .then(() => {
      dispatch(loading(false));
    })
    .catch((error) => {
      dispatch(loading(false));
      dispatch(onError(error));
    });
};

export const getPosts = () => (dispatch) => {
  dispatch(loading(true));
  getPostsRequest()
    .then((posts) => {
      const values = [];
      dispatch(loading(false));
      for (var value in posts) {
        const createdAt = posts[value].data().createdAt;
        values.push({ ...posts[value].data() });
        values[value].createdAt = createdAt.toDate().toLocaleDateString();
      }
      dispatch(setPosts(values));
    })
    .catch((error) => {
      dispatch(loading(false));
      dispatch(onError(error.toString()));
    });
};
