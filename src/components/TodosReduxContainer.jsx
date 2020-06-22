import {connect} from 'react-redux'
import React, { useState } from "react";
import { Spinner } from 'reactstrap';
import { deleteToDo, updateTodo, addTodo, handleTextChange, removeText } from './actions/todoActions';


const handleDelete = (props, id) => {
    props.deleteToDo(id)
}

const handleUpdate = (e, id, props) => {
    props.updateTodo(id, e.target.checked)
}   

const createTodo = (e, inputValue, setinputValue, props) => {
    if(e.key === 'Enter'){
        props.addTodo(inputValue)
        setinputValue("")
    }
}

// const handleChange = (e, props) => {
//     props.handleTextChange(e.target.value)
// }

const TodosReduxContainer = (props) => {
    const [inputValue, setinputValue] = useState("");
    if(props && props.todos.length  === 0){
        return(
            <div style={{textAlign: 'center'}}>
              <Spinner animation="border" />
            </div>
        )
    }else{
        return(
            <div>
                <div className="inputContainer">
                <input 
                    className="taskInput" 
                    type="text" 
                    placeholder="Add a task" 
                    maxLength="50"
                    onKeyPress={(e) => createTodo(e, inputValue, setinputValue, props)}
                    value={inputValue || ''} 
                    // onChange={(e) => handleChange(e, props)}
                    onChange={e => setinputValue(e.target.value)}  
                    />
                </div>   
                <div className="listWrapper">
                    <ul className="taskList">
                        {props.todos.map((todo) => {
                        return(
                            <li className="task" todo={todo} key={todo.id}>
                                <input className="taskCheckbox" type="checkbox" 
                                checked={todo.done}
                                onChange={(e) => handleUpdate(e, todo.id, props)}
                            />              
                                <label className="taskLabel">{todo.title}</label>
                                <span className="deleteTaskBtn"
                                onClick={(e) => handleDelete(props, todo.id)}>
                                x
                                </span>
                            </li>
                        )       
                        })} 	    
                    </ul>
                </div>
            </div>  
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteToDo: (id) => {dispatch(deleteToDo(id))},
        addTodo: (data) => {dispatch(addTodo(data))},
        updateTodo: (id, checked) => {dispatch(updateTodo(id, checked))},
        removeText: () => {dispatch(removeText())},
        handleTextChange: (data) => {dispatch(handleTextChange(data))}
    }
}

export default connect(null, mapDispatchToProps)(TodosReduxContainer)