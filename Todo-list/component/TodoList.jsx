import PropTypes from 'prop-types';
import React, {useState} from 'react';
import "./TodoList.css"

const TodoList = ({ todos, onDelete, onWorking, onUpdate }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditContent(todo.content);
  };

  const finishEditing = () => {
    onUpdate(editingId, editTitle, editContent);
    setEditingId(null);
  };

  return (
    <div className='todo-list-wrapper'>
      {todos.map((todo, index) => { 
        const isEditing = editingId === todo.id;

        return (
          <div key={todo.id} className='todo-card'>
            <div className='card-header'>
              <div className='status-icon'>{index + 1}</div>
              <div className='icons'>
                <button className="icon-btn" onClick={() => onWorking(todo.id)}>
                  {todo.isDone ? '✔️' : '✅'}
                </button>
                <button className="icon-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
              </div>
            </div>
        
        {isEditing ? (
          <>
            <input
              className="edit-title"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              maxLength = {23}
            />
            <textarea
              className="edit-content"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              maxLength= {1000}
              />
              <button className="save-btn" onClick={finishEditing}>저장</button>
            </>
        ) : (
      <div onDoubleClick={() => startEditing(todo)}>
        <div className='todo-title'>
          {todo.title || '제목 없음'}
          {todo.isDone && <span className='done-badge'> (완료)</span>}
        </div>
        <div className="todo-content">
          {todo.content.length > 30
            ? todo.content.slice(0, 30) + 
            '...' : todo.content || '내용 없음'}
        </div>
      </div>
      )}
    </div>
  );
})}
</div>
);
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onWorking: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
}

export default TodoList;