import { 
    CREATE_TODO,
    REMOVE_TODO,
    MARK_TODO_COMPLETED,
    FETCH_TODOS_FAILURE,
    FETCH_TODOS_INPROGRESS,
    FETCH_TODOS_SUCCESS
} from './actions';


export const isLoading = (state = false, action) => {
    const { type } = action;
    switch (type) {
        case FETCH_TODOS_INPROGRESS: return true;
        case FETCH_TODOS_FAILURE:
        case FETCH_TODOS_SUCCESS: return false;
        default: return state;
    }
}

export const todos = (state = [], action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return state.concat(todo);
        }

        case REMOVE_TODO: {
            const { id } = payload; 
            return state.filter(todo => todo.id != id);
        }

        case MARK_TODO_COMPLETED: {
            const { todo:updatedTodo } = payload;
            return state.map(e => {
                if (e.id === updatedTodo.id) {
                    return updatedTodo;
                }
                return e;
            });
        }
        case FETCH_TODOS_SUCCESS: {
            const { todos } = payload;
            return todos;
        }

        case FETCH_TODOS_INPROGRESS: 
        case FETCH_TODOS_FAILURE:
        default:
            return state;
    }
}