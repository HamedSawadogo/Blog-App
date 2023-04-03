import React, { useState } from "react";
import Blog from "./Blog";
const Blogs = ({ blogsData }) => {
  const [blogSize, setBlogsSize] = useState(30);

  window.addEventListener("scroll", () => {
    //get total size of windows
    const sizeTotal = document.documentElement.scrollHeight;
    //windows height
    const height = window.innerHeight;
    const scrollTop = window.scrollY;
    if (height + scrollTop + 550 >= sizeTotal) {
      setBlogsSize(blogSize + 15);
    }
  });
  return (
    <div className="blogs-container">
      {blogsData.slice(0, blogSize).map((blog, key) => (
        <Blog blog={blog} key={key} />
      ))}
    </div>
  );
};

export default Blogs;
