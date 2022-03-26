import { createSlice } from "@reduxjs/toolkit";

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: {
    currentUser: {},
    isLoading: false,
    error: "",
  },
  reducers: {
    onAuthStateChange: (state, action) => {
      state.currentUser = action.payload;
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    onError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { onAuthStateChange, loading, onError } =
  authenticationSlice.actions;

export const selectError = (state) => state.authentication.error;
export const selectCurrentUser = (state) => state.authentication.currentUser;
export const selectLoading = (state) => state.authentication.isLoading;

export const authenticationReducer = authenticationSlice.reducer;
