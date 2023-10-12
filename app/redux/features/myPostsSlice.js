import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMyPosts,deletePost } from "@services/deleteApi";

const myPostsSlice = createSlice({
  name: "myPosts",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMyPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchMyPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.data = state.data.filter((item) => item._id !== action.payload);
      });
  },
});

export default myPostsSlice.reducer;
