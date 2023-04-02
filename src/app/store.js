import { configureStore } from "@reduxjs/toolkit";
import BlogsReducer from "../features/blog.slice";
export default configureStore({
  reducer: BlogsReducer,
});
