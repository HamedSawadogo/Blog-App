import React from "react";
import Blog from "./Blog";
const Blogs = ({ blogsData }) => {
  return (
    <div className="blogs-container">
      {blogsData.slice(0, 30).map((blog, key) => (
        <Blog blog={blog} key={key} />
      ))}
    </div>
  );
};

export default Blogs;
