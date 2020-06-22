// Action for get availabel todos
export const getTodos = () => {
    return (dispatch) => {
        fetch("https://todo-api-20.herokuapp.com/api/v1/todos")
        .then((res) => res.json())
        .then((res2) => {
            dispatch({type: 'GET_TODOS', todos: res2})
        })
    }
}

//Action for add new todo in todo list
export const addTodo = (data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({todo: { title: `${data}` }})
    };
    return (dispatch) => {
        fetch("https://todo-api-20.herokuapp.com/api/v1/todos", requestOptions)
        .then((res) => res.json())
        .then((res2) => {
            dispatch({type: 'ADD_TODO', todo: res2})
        })
    }
}

//action for update todos with done or not
export const updateTodo = (id, checked) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({todo: { done: checked }})
    };
    return (dispatch) => {
        fetch(`https://todo-api-20.herokuapp.com/api/v1/todos/${id}`, requestOptions)
        .then((res) => res.json())
        .then((res2) => {
            dispatch({type: 'UPDATE_TODO', todo: res2})
        })
    }
}

//action for delete todo from list
export const deleteToDo = (id) => {
    return (dispatch) => {
        fetch(`https://todo-api-20.herokuapp.com/api/v1/todos/${id}`, {
            method: 'DELETE',
        })
        .then((res) => dispatch({type: 'DELETE_TODO', id: id}))
    }
}

// action to handle add todo list text box
export const handleTextChange = (data) => {
    return{
        type: 'ADD_TEXT',
        text: data
    }
}

// action to handle text removed after addting to list
export const removeText = () => {
    return{
        type: 'REMOVE_TEXT',
        text: ""
    }
}