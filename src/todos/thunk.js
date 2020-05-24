import { fetchTodosInprogress, fetchTodosSuccess, fetchTodosFailure, createTodo, markTodoAsCompleted, removeTodo} from './actions';

export const fetchTodos = () => async (dispatch) => {
    try {
        dispatch(fetchTodosInprogress());
        const response = await fetch('https://todo-app-54f85.firebaseio.com/todos.json');
        const todos = await response.json();
        const fetchedTodos = [];
        for(let key in todos){
            fetchedTodos.push({
                ...todos[key],
                id: key  
            });
        }
        dispatch(fetchTodosSuccess(fetchedTodos));
    }catch(e){
        dispatch(fetchTodosFailure());
    }
}

export const addTodo = (text) => async (dispatch) => {
    let todo = {
        "text": text,
        "created_at": new Date().toUTCString(),
        "isCompleted": false
    }
    const body = JSON.stringify(todo);
    try {
        const response = await fetch('https://todo-app-54f85.firebaseio.com/todos.json', {
            header: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,
        });

        const obj = await response.json();
        dispatch(createTodo({...todo, id: obj.name}));
    }catch(e){
        console.log(e);
    }

}

export const updateTodos = (todo) => async (dispatch) => {
    const updatedTodo = {
        ...todo,
        isCompleted: true
    }

    const body = JSON.stringify(updatedTodo);
    try {
        const response = await fetch('https://todo-app-54f85.firebaseio.com/todos/'+todo.id+'.json', {
            header: {
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body,
        });
        dispatch(markTodoAsCompleted(updatedTodo));
    }catch(e){
        dispatch(fetchTodosFailure());
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {
        const response = await fetch('https://todo-app-54f85.firebaseio.com/todos/'+id+'.json', {
            header: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE'
        });

        const deleted = await response.json();
        dispatch(removeTodo(id));
    }catch(e){
        dispatch(fetchTodosFailure());
    }
}