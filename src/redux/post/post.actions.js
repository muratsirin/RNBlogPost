import { setPosts, loading, onError } from "./post.slice";
import {
  getPostsRequest,
  addPostRequest,
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

export const getPosts = () => (dispatch) => {
  dispatch(loading(true));
  getPostsRequest()
    .then((posts) => {
      const values = [];
      dispatch(loading(false));
      for (var value in posts) {
        values.push({ ...posts[value].data(), id: value });
      }
      dispatch(setPosts(values));
    })
    .catch((error) => {
      dispatch(loading(false));
      dispatch(onError(error.toString()));
    });
};