import { configureStore } from "@reduxjs/toolkit";

import {
  removeToken,
  setCurrentToken,
  tokenReducer,
} from "./slices/tokenSlice";
import { removeUser, setCurrentUser, userReducer } from "./slices/userSlice";

const store = configureStore({
  reducer: {
    users: userReducer,
    tokens: tokenReducer,
  },
});

export default store;
export {
  removeToken,
  removeUser,
  setCurrentToken,
  setCurrentUser,
  tokenReducer,
  userReducer,
};
