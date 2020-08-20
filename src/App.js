import React, { useState } from 'react';
import './index.css';
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'

const App = () => {

  const [todos, setTodos] = useState([
    {id: 1, task: 'drink milk'},
    {id: 2, task: 'play sport'},
    {id: 3, task: 'hobba el lalaaa'}
  ])

  const RemoveTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  const AddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className="App">
      <TodoList todos={todos} RemoveTodo={RemoveTodo}/>
      <AddTodoForm AddTodo={AddTodo}/>
    </div>
  );
}

export default App;
