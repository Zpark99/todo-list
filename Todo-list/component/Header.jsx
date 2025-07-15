import React from 'react';
import "./Header.css"

const Header = () => {
  return (
    <header className="header-container">
    <div className="Main-area">
      <h1 className='logo-text'>TODOLIST</h1>
    </div>

    <div className='status-area'>
      <div className="status all">현황</div>
      <div className="status working">💪 Working..! <span>0</span></div>
      <div className="status done">🌈 Done..! <span>0</span></div>
    </div>
    </header>
  )
}

export default Header;