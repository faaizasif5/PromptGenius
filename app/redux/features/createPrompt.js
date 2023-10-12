import { createSlice } from "@reduxjs/toolkit";
import { createPromptAsync } from "@services/createApi";

const initialState = {
  post: {
    prompt: "",
    tag: "",
  },
  status: "idle",
  error: null,
};

const createPromptSlice = createSlice({
  name: "createPrompt",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
    clearPost: (state) => {
      state.post = initialState.post;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPromptAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createPromptAsync.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(createPromptAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setPost, clearPost } = createPromptSlice.actions;
export default createPromptSlice.reducer;
