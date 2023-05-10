import React, { useEffect, useState } from "react";
import Delete from "../../img/delete.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";
import './Single.css';
import Menu from '../../components/Menu/Menu';
import Logo from "../../img/logo.png";

const Single = () => {
  const [post, setPost] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async ()=>{
    try {
      await axios.delete(`/posts/${postId}`);
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="single">
      <div className="content">
      <img src={`../upload/${post?.img}` ?? Logo} alt="" />
        <div className="user">
        <img
          src={post?.userImg ?? Logo}
          alt=""
        />  
          <div className="info">
            <span>{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
            <div className="edit">
              {/* <Link to={`/write?edit=2`} state={post}>
                <img src={Edit} alt="" />
              </Link> */}
              <img onClick={handleDelete} src={Delete} alt="" />
            </div>
        </div>
        <h1 className="title">{post.title}</h1>
        <p className="desc"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>      </div>
      <Menu cat={post.cat}/>
    </div>
  );
};

export default Single;