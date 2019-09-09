import React from 'react';
import logo from './logo.svg'
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <form className="todo-list">
        <ul>
          <div className="todo">
            <div className="checkbox" />
              <input type="text" value="Todo one" />
            </div>
        </ul>
      </form>
    </div>
  );
}

export default App;
