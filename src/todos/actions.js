export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: {text},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (text) => ({
    type: REMOVE_TODO,
    payload: {text},
});

export const MARK_TODO_COMPLETED = 'MARK_TODO_COMPLETED';
export const markTodoAsCompleted = (text) => ({
    type: MARK_TODO_COMPLETED,
    payload: {text},
});