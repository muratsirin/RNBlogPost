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
      state.user = action.payload;
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

export const authenticationReducer = authenticationSlice.reducer;
