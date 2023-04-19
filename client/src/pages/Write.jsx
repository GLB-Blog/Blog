import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const[value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title" />
          <div className='editorContainer'> 
          <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
          </div>
        
      </div>
      <div className="menu">
        <div className="item"> 
        <h1>Publish</h1>
        <span>
          <b>Status:</b> Draft
        </span>
        <span>
          <b>Visibility:</b> Public
        </span>
        <input style={{display:"none"}} type="file" id="file" name=""/>
        <label className="file" htmlFoe="file">Upload Image</label>
        <div className='buttons'>
          <button>Save as a draft</button>
          <button>Update</button>
        </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-1" id="SDG-1"/>
          <label htmlFor="SDG-1">SDG-1</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-2" id="SDG-2"/>
          <label htmlFor="SDG-2">SDG-2</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-3" id="SDG-3"/>
          <label htmlFor="SDG-3">SDG-3</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-4" id="SDG-4"/>
          <label htmlFor="SDG-4">SDG-4</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-5" id="SDG-5"/>
          <label htmlFor="SDG-5">SDG-5</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-6" id="SDG-6"/>
          <label htmlFor="SDG-6">SDG-6</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-7" id="SDG-7"/>
          <label htmlFor="SDG-7">SDG-7</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-8" id="SDG-8"/>
          <label htmlFor="SDG-8">SDG-8</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-9" id="SDG-9"/>
          <label htmlFor="SDG-9">SDG-9</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-10" id="SDG-10"/>
          <label htmlFor="SDG-10">SDG-10</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-11" id="SDG-11"/>
          <label htmlFor="SDG-11">SDG-11</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-12" id="SDG-12"/>
          <label htmlFor="SDG-12">SDG-12</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-13" id="SDG-13"/>
          <label htmlFor="SDG-13">SDG-13</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-14" id="SDG-14"/>
          <label htmlFor="SDG-14">SDG-14</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-15" id="SDG-15"/>
          <label htmlFor="SDG-15">SDG-15</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-16" id="SDG-16"/>
          <label htmlFor="SDG-16">SDG-16</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="SDG-17" id="SDG-17"/>
          <label htmlFor="SDG-17">SDG-17</label>
          </div>
          <div className="cat">
          <input type="checkbox" name="category" value="All" id="All"/>
          <label htmlFor="All">All</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write