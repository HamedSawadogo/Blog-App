import { createSlice } from "@reduxjs/toolkit";

export const BlogReducer = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
  },
  reducers: {
    getBlogsData: (state, { payload }) => {
      state.blogs = payload;
    },
  },
});
export default BlogReducer.reducer;
export const { getBlogsData } = BlogReducer.actions;
