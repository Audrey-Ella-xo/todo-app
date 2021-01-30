import { useState } from 'react';
import './App.css';
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {text: "Learn react"},
    {text: "Study"},
    {text: "Take a Nap"} 
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          React ToDo Application
        </h1>
      </header>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo 
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
        <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
