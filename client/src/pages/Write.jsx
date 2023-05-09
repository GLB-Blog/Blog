import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Write = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [cats, setCats] = useState([]);

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      await axios.post(`/posts/`, {
            title,
            desc: value,
            cats,
            img: file ? imgUrl : "",
            datetime: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  const handleCatChange = (e) => {
    const cat = e.target.value;
    if (cats.includes(cat)) {
      setCats(cats.filter(c => c !== cat));
    } else {
      setCats([...cats, cat]);
    }
  }

  const handleCheckAll = () => {
    const allGoals = Array.from({ length: 17 }, (_, i) => `goal-${i + 1}`);
    setCats(allGoals);
  };

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
          <div className='editorContainer'> 
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
          </div>
        
      </div>
      <div className="menu">
        <div className="item"> 
        <h1 className="publish">Publish</h1>
        <span>
          <b>Status:</b> Draft
        </span>
        <span>
          <b>Visibility:</b> Public
        </span>
        <input style={{display:"none"}} type="file" id="file" name="" onChange={(e) => setFile(e.target.files[0])} />
        <label className="file" htmlFor="file">
            Upload Image
          </label>
        <div className='buttons'>
          <button>Save as a draft</button>
          <button onClick={handleClick}>Publish</button>
        </div>
        </div>
        <div className="item">
          <h1 className="categorytext">Category</h1>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-1")} name="category" value="goal-1" id="goal-1" onChange={handleCatChange} />
          <label htmlFor="goal-1">SDG-1</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-2")} name="category" value="goal-2" id="goal-2" onChange={handleCatChange} />
          <label htmlFor="goal-2">SDG-2</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-3")} name="category" value="goal-3" id="goal-3" onChange={handleCatChange} />
          <label htmlFor="goal-3">SDG-3</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-4")} name="category" value="goal-4" id="goal-4" onChange={handleCatChange} />
          <label htmlFor="goal-4">SDG-4</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-5")} name="category" value="goal-5" id="goal-5" onChange={handleCatChange} />
          <label htmlFor="goal-5">SDG-5</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-6")} name="category" value="goal-6" id="goal-6" onChange={handleCatChange} />
          <label htmlFor="goal-6">SDG-6</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-7")} name="category" value="goal-7" id="goal-7" onChange={handleCatChange} />
          <label htmlFor="goal-7">SDG-7</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-8")} name="category" value="goal-8" id="goal-8" onChange={handleCatChange} />
          <label htmlFor="goal-8">SDG-8</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-9")} name="category" value="goal-9" id="goal-9" onChange={handleCatChange} />
          <label htmlFor="goal-9">SDG-9</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-10")} name="category" value="goal-10" id="goal-10" onChange={handleCatChange} />
          <label htmlFor="goal-10">SDG-10</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-11")} name="category" value="goal-11" id="goal-11" onChange={handleCatChange} />
          <label htmlFor="goal-11">SDG-11</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-12")} name="category" value="goal-12" id="goal-12" onChange={handleCatChange} />
          <label htmlFor="goal-12">SDG-12</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-13")} name="category" value="goal-13" id="goal-13" onChange={handleCatChange} />
          <label htmlFor="goal-13">SDG-13</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-14")} name="category" value="goal-14" id="goal-14" onChange={handleCatChange} />
          <label htmlFor="goal-14">SDG-14</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-15")} name="category" value="goal-15" id="goal-15" onChange={handleCatChange} />
          <label htmlFor="goal-15">SDG-15</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-16")} name="category" value="goal-16" id="goal-16" onChange={handleCatChange} />
          <label htmlFor="goal-16">SDG-16</label>
          </div>
          <div className="cat">
          <input type="checkbox" checked={cats.includes("goal-17")} name="category" value="goal-17" id="goal-17" onChange={handleCatChange} />
          <label htmlFor="goal-17">SDG-17</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="All" id="All" onChange={handleCheckAll} />
          <label htmlFor="All">All</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write
