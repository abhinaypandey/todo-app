
export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = (todo) => ({
    type: CREATE_TODO,
    payload: {todo},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: {id},
});

export const MARK_TODO_COMPLETED = 'MARK_TODO_COMPLETED';
export const markTodoAsCompleted = (todo) => ({
    type: MARK_TODO_COMPLETED,
    payload: {todo},
});

export const FETCH_TODOS_INPROGRESS = "FETCH_TODOS_INPROGRESS";
export const fetchTodosInprogress = () => ({
    type: FETCH_TODOS_INPROGRESS
});

export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const fetchTodosSuccess = (todos) => ({
    type: FETCH_TODOS_SUCCESS,
    payload: {todos}
});

export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";
export const fetchTodosFailure = () => ({
    type: FETCH_TODOS_FAILURE
});
