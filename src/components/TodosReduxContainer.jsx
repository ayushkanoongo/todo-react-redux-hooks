import React, { useState } from "react";
import { Spinner } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { deleteToDo, updateTodo, addTodo } from './actions/todoActions';


const handleDelete = (props, id, dispatch) => {
    dispatch(deleteToDo(id))
}

const handleUpdate = (e, id, props, dispatch) => {
    dispatch(updateTodo(id, e.target.checked))
}   

const createTodo = (e, inputValue, setinputValue, props, dispatch) => {
    if(e.key === 'Enter'){
        dispatch(addTodo(inputValue))
        setinputValue("")
    }
}

const TodosReduxContainer = (props) => {
    const [inputValue, setinputValue] = useState("");
    const dispatch = useDispatch();
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
                    onKeyPress={(e) => createTodo(e, inputValue, setinputValue, props, dispatch)}
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
                                onChange={(e) => handleUpdate(e, todo.id, props, dispatch)}
                            />              
                                <label className="taskLabel">{todo.title}</label>
                                <span className="deleteTaskBtn"
                                onClick={(e) => handleDelete(props, todo.id, dispatch)}>
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

export default TodosReduxContainer