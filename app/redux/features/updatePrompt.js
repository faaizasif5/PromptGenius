"use client"
import { createSlice } from "@reduxjs/toolkit";
import { fetchPrompt,updatePromptData } from "@services/updateApis";

const updatePromptSlice = createSlice({
  name: "updateprompt",
  initialState: {
    post: {
      prompt: "",
      tag: "",
    },
    submitting: false,
    status: "",
  },
  reducers: {
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPrompt.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPrompt.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(fetchPrompt.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(updatePromptData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePromptData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.post = action.payload;
      })
      .addCase(updatePromptData.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setPost } = updatePromptSlice.actions;

export default updatePromptSlice.reducer;
