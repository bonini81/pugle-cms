import { configureStore } from "@reduxjs/toolkit";

import {
  removeToken,
  setCurrentToken,
  tokenReducer,
} from "./slices/tokenSlice";
import { removeUser, setCurrentUser, userReducer } from "./slices/userSlice";

/** const userSlice = createSlice({
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
}); */

/** 
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
}); */

const store = configureStore({
  reducer: {
    users: userReducer,
    tokens: tokenReducer,
  },
});

// const startingState = store.getState();

export default store;
export {
  removeToken,
  removeUser,
  setCurrentToken,
  setCurrentUser,
  tokenReducer,
  userReducer,
};
