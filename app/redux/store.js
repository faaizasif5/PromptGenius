'use client';

import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import createPromptReducer from "./features/createPrompt";
import myPostsReducer from "./features/myPostsSlice";
import updateReducer from "./features/updatePrompt"

const store = configureStore({
  reducer: {
    createPrompt: createPromptReducer,
    myPosts: myPostsReducer,
    updateprompt:updateReducer,
  },
  middleware: [thunk],
});

export default store;
