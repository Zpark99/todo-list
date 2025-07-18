import React from 'react'; // 자동차 내부 설계
import "./App.css";
import Header from '../component/Header';
import Todoeditor from './../component/Todoeditor';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Todoeditor></Todoeditor>
    </div>  
  );
}

export default App;