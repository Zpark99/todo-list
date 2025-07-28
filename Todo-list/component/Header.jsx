import React from 'react';
import "./Header.css"
import PropTypes from 'prop-types';

const Header = ({ todos = [] }) => {
  const workingCount = todos.filter((todo) => !todo.isDone).length;
  const doneCount = todos.filter((todo) => todo.isDone).length;

  return (
    <header className="header-container">
    <div className="Main-area">
      <h1 className='logo-text'>TODOLIST</h1>
    </div>

    <div className='status-area'>
      <div className="status all">현황</div>
      <div className="status working">💪 Working..! <span>{workingCount}</span></div>
      <div className="status done">🌈 Done..! <span>{doneCount}</span></div>
    </div>
    </header>
  )

}

Header.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Header; 