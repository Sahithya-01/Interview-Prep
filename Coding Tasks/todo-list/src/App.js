import { useState } from 'react'
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])
  const [todoInput, setTodoInput] = useState('')

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodoList([
        ...todoList,
        { id: Date.now(), text: todoInput, completed: false },
      ])
      setTodoInput('')
    }
    console.log('Todo List is:', todoList)
  }

  const deleteTodoItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Add a Todo Item"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodoItem(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
