import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../context/ThemeContext";

const BlogColorWrapper = styled.div`
  color: ${({ color }) => (color === "dark" ? "#f1f1f1" : "#333")};
`;

const Blog = ({ blog }) => {
  const { theme } = useContext(ThemeContext);
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("fr-Fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  return blog.urlToImage ? (
    <BlogColorWrapper color={theme}>
      <div className="blog-container">
        <img src={blog.urlToImage} alt={`l'image du blog ${blog.title}`} />
        <h4>{blog.author}</h4>
        <h3>{blog.title}</h3>
        <small>publié le {formatDate(blog.publishedAt)}</small>
        <a href={blog.url} target="_blank">
          en savoir plus
        </a>
      </div>
    </BlogColorWrapper>
  ) : (
    ""
  );
};

export default Blog;
