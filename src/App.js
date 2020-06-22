import React from 'react';
import './App.css';
import TodosReduxContainer from './components/TodosReduxContainer';
import { useSelector } from 'react-redux';

function App(props) {
  const todos = useSelector(state => state.todos);
  const inputValue = useSelector(state => state.inputValue);
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodosReduxContainer {...props} todos={todos} inputValue={inputValue}/>
      </div>
    </div>
  );
}

export default App;
