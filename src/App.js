import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import TodosReduxContainer from './components/TodosReduxContainer';
// import TodosContainer from './components/TodosContainer';

function App(props) {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodosReduxContainer {...props}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    inputValue: state.inputValue
  }
}

export default connect(mapStateToProps)(App);
