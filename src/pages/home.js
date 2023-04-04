import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getBlogsData } from "../features/blog.slice";
import Blogs from "../components/Blogs";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-03-04&sortBy=publishedAt&apiKey=21e0bcf1daf84264a9f3487f640070af"
      )
      .then((res) => {
        dispatch(getBlogsData(res.data.articles));
        setLoading(false);
      });
  }, []);
  console.log(blogs);
  return (
    <div>
      {!loading ? (
        <Blogs blogsData={blogs} />
      ) : (
        <p style={{ textAlign: "center" }}>chargement ...</p>
      )}
    </div>
  );
};

export default Home;
