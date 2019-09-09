import React, { useState } from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Finish laundry',
      isCompleted: false
    },
    {
      content: '',
      isCompleted: false
    },
    {
      content: '',
      isCompleted: false
    }
  ])

  function handleKeyDown(event, index) {
    if (event.key === 'Enter') {
      createTodoAtIndex(event, index)
    }
    if (event.key === 'Backspace' && todos[index].content === '') {
      event.preventDefault()
      return removeTodoAtIndex(index)
    }
  }

  function removeTodoAtIndex(index) {
    if (index === 0 && todos.length === 1) return
    setTodos(todos => todos.slice(0, index).concat(todos.slice(index + 1, todos.length)))
    setTimeout(() => {
      if (index === 0) {
        document.forms[0].elements[index].focus()
      } else {
        document.forms[0].elements[index - 1].focus()
      }
    }, 0)
  }

  function createTodoAtIndex(event, index) {
    const newTodos = [...todos]
    newTodos.splice(index + 1, 0, {
      content: '',
      isCompleted: false
    })
    setTodos(newTodos)
    setTimeout(() => {
      document.forms[0].elements[index + 1].focus()
    }, 0)
  }

  function updateTodoAtIndex(event, index) {
    const newTodos = [...todos]
    newTodos[index].content = event.target.value
    setTodos(newTodos)
  }

  function toggleTodoCompleteAtIndex(index) {
    const temporaryTodos = [...todos]
    temporaryTodos[index].isCompleted = !temporaryTodos[index].isCompleted
    setTodos(temporaryTodos)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <form className="todo-list">
        <ul>
          {todos.map((todo, index) => (
          <div className={`todo ${todo.isCompleted && 'todo-is-completed'}`}>
            <div className={'checkbox'} onClick={() => toggleTodoCompleteAtIndex(index)}>
              {todo.isCompleted && (
                <span>&#x2714;</span>
              )}
              </div>
              <input
                type="text"
                value={todo.content}
                onKeyDown={event => handleKeyDown(event, index)}
                onChange={event => updateTodoAtIndex(event, index)}
              />
            </div>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
