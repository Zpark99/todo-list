import "./Todoeditor.css"
import React from 'react'

const Todoeditor = () => {
  return (
   <div className="todo-editor">
    <div className="title-group">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" maxLength={23} />
      <span className="text-count">0 / 23</span>
    </div>

    <div className="form-group">
      <label htmlFor="content">Content</label>
      <textarea id="content" maxLength={1000}></textarea>
      <span className="text-count">0 / 1000</span>
    </div>

    <button type="button">Add</button>
  </div>
  );
};

export default Todoeditor;