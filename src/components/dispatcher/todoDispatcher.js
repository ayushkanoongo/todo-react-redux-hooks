const initState = {
    todos: [],
    inputValue: ""
}

const todoDispatcher = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TODOS': {
            return{
                ...state,
                todos: action.todos
            }
        }
        case 'ADD_TEXT': {
            return{
                ...state,
                inputValue: action.text
            }
        }
        case 'REMOVE_TEXT': {
            return{
                ...state,
                inputValue: action.text
            }
        }
        case 'ADD_TODO': {
            return{
                ...state,
                todos: [action.todo, ...state.todos]
            }
        }
        case 'UPDATE_TODO': {
            return{
                ...state,
                todos: state.todos.map((todo, i) => todo.id === action.todo.id ? {...todo, done: action.todo.done} : todo )
            }
        }
        case 'DELETE_TODO': {
            const newTodoList = state.todos.filter((e) => e.id !== action.id)
            return{
                ...state,
                todos: newTodoList
            }
        }
        default: {
            return state
        }
    }
}

export default todoDispatcher