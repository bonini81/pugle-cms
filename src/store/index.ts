import { configureStore, createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeUser: (state, action) => {
      state.currentUser = null;
    },
  },
});

const tokenSlice = createSlice({
  name: "token",
  initialState: {
    currentToken: null,
  },
  reducers: {
    setCurrentToken: (state, action) => {
      state.currentToken = action.payload;
    },
    removeToken: (state, action) => {
      state.currentToken = null;
    },
  },
});

const store = configureStore({
  reducer: {
    logins: userSlice.reducer,
    tokens: tokenSlice.reducer,
  },
});

// const startingState = store.getState();

export default store;
export const { setCurrentUser, removeUser } = userSlice.actions;
export const { setCurrentToken, removeToken } = tokenSlice.actions;
