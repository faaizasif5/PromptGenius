import { createAsyncThunk } from "@reduxjs/toolkit";

export const createPromptAsync = createAsyncThunk(
  "createPrompt/createPromptAsync",
  async ({ prompt, userId, tag }, thunkAPI) => {
    try {
      const response = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt,
          userId,
          tag,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create prompt");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
