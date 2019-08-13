import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import ListForm from './components/ListForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <div className='app'>
      <div className='header'>
        <h1>Shopping List</h1>
        <ListForm />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
