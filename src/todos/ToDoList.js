import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ToDoListItem from './ToDoListItem';
import LinearProgressBar from './LinearProgressBar';

import LinearProgress from '@material-ui/core/LinearProgress';
import { fetchTodos, updateTodos, deleteTodo } from './thunk';

const ToDoList = ({todos = [], onRemove, onMarkCompleted, isLoading, onStartLoadingTodos}) => {
    useEffect( () => {
        onStartLoadingTodos();
    },[]);

    const loadingMsg = <LinearProgress color="secondary" />
    const content = (
        <div className="todo-list">
            {todos.length > 0 && todos.map( (todo,i) => <ToDoListItem 
                key={i} 
                todo={todo} 
                onRemove={onRemove} 
                onMarkCompleted={onMarkCompleted}
                loading={isLoading}/>)}
        </div>
    );

    return isLoading ? loadingMsg : content;
}

const mapStateToProps = state => ({
    todos: state.todos,
    isLoading: state.isLoading 
 });

 const mapDispatchToProps = dispatch => ({
     onRemove: id => dispatch(deleteTodo(id)),
     onMarkCompleted: todo => dispatch(updateTodos(todo)),
     onStartLoadingTodos: () => dispatch(fetchTodos())
 });

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);