import axios from "axios";
import React, { useEffect, useState } from "react";
import './Menu.css';
import { Link } from "react-router-dom";

const Menu = ({cat}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  return (
    <div className="container">
  <div className="menu">
    <h1 className="other">Other posts you may like</h1>
    {posts.map((post) => (
      <div className="post" key={post.id}>
        <img className="postImg" src={`../upload/${post?.img}`} alt="" />
        <Link className="link" to={`/post/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
        <Link className="link" to={`/post/${post.id}`}>
          <button className="postButton">Read More</button>
        </Link>
      </div>
    ))}
  </div>
</div>
  );
};

export default Menu;