import "./Todoeditor.css"
import React, { useState } from 'react'
import PropTypes from "prop-types";

const Todoeditor = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return alert("둘 다 입력해주세요!");
    onCreate(title, content);
    setTitle('');
    setContent('');
  };

  return (
   <form className="todo-editor" onSubmit={handleSubmit}>
    <div className="title-group">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={23}/>
      <span className="text-count">{title.length} / 23</span>
    </div>

    <div className="form-group">
      <label htmlFor="content">Content</label>
      <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} maxLength={1000}>
      </textarea>
      <span className="text-count">{content.length} / 1000</span>
    </div>

    <button type="submit">Add</button>
  </form>
  );
};

Todoeditor.propTypes = {
  onCreate: PropTypes.func.isRequired,
};

export default Todoeditor;