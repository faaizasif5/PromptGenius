import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMyPosts = createAsyncThunk(
  "myPosts/fetchMyPosts",
  async (userId) => {
    const response = await fetch(`/api/users/${userId}/posts`);
    const data = await response.json();
    return data;
  },
);

export const deletePost = createAsyncThunk(
  "myPosts/deletePost",
  async (postId) => {
    try {
      await fetch(`/api/prompt/${postId}`, {
        method: "DELETE",
      });
      return postId;
    } catch (error) {
      throw new Error(error.message);
    }
  },
);
