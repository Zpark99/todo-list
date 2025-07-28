import React, { useEffect, useState } from 'react'; // 자동차 내부 설계
import "./App.css";
import Header from '../component/Header';
import Todoeditor from './../component/Todoeditor';
import TodoList from '../component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCreate = (title, content) => {
    const newTodo = {
      id:Date.now(),
      title,
      content,
      isDone: false
    };
    setTodos([newTodo, ...todos]);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleWorking = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id? { ...todo, isDone: !todo.isDone} : todo
  );
  setTodos(newTodos);
}

const handleUpdate = (id, newtitle, newContent) => {
  setTodos(prev =>
    prev.map(todo =>
      todo.id === id ? { ...todo, title: newtitle, content: newContent } : todo
    )
  );
};

  return (
  <div className="App">
      <Header todos={todos}></Header>

    <div className='main-layout'>
      <Todoeditor onCreate={handleCreate}/>
      <TodoList todos={todos} onDelete={handleDelete} onWorking={handleWorking} onUpdate={handleUpdate}/>
    </div>
  </div>  
  );
};

export default App;
