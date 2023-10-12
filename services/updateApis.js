import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPrompt = createAsyncThunk(
  "updateprompt/fetchPrompt",
  async (promptId) => {
    const response = await fetch(`/api/prompt/${promptId}`);
    const data = await response.json();
    return data;
  }
);

export const updatePromptData = createAsyncThunk(
  "updatePromptData/updatePrompt",
  async ({ promptId, postData }) => {
    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Update failed");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);
