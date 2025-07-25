import PropTypes from 'prop-types';
import React from 'react';
import "./TodoList.css"

const TodoList = ({ todos }) => {
  return (
    <div className='todo-list-wrapper'>
      {todos.map((todo) => {
        console.log("todo 확인:", todo);
        return (
          <div key={todo.id} className='todo-card'>
            <div className='card-header'>
              <div className='status-icon'>🥎</div>
              <div className='icons'>
                <span className='good'>✅</span>
                <span className='trash'>🗑️</span>
              </div>
            </div>
        <div className='todo-title'>{todo.title}</div>
        <div className="todo-content">
          {todo.content.length > 30
            ? todo.content.slice(0, 30) + 
            '...' 
            : todo.content}
        </div>
      </div>
        );
      })}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList;