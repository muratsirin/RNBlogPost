import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: "",
    posts: [],
    isLoading: false,
    error: "",
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    setPosts: (state, action) => {
      console.log(action.payload);
      state.posts = action.payload;
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setPost, setPosts, loading, onError } = postSlice.actions;

export const selectPost = (state) => state.post.post;
export const selectPosts = (state) => state.post.posts;
export const selectIsLoading = (state) => state.post.isLoading;
export const selectError = (state) => state.post.error;

export const postReducer = postSlice.reducer;
