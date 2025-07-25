import React, { useState } from 'react'; // 자동차 내부 설계
import "./App.css";
import Header from '../component/Header';
import Todoeditor from './../component/Todoeditor';
import TodoList from '../component/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleCreate = (title, content) => {
    const newTodo = {
      id:Date.now(),
      title,
      content,
      isDone: false
    };
    setTodos([newTodo, ...todos]);
  };

  return (
  <div className="App">
      <Header></Header>

    <div className='main-layout'>
      <Todoeditor onCreate={handleCreate}/>
      <TodoList todos={todos}/>
    </div>
  </div>  
  );
};

export default App;
