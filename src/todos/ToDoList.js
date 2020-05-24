import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ToDoListItem from './ToDoListItem';
import ToDoForm from './ToDoForm';
import { fetchTodos, updateTodos, deleteTodo } from './thunk';

const ToDoList = ({todos = [], onRemove, onMarkCompleted, isLoading, onStartLoadingTodos}) => {
    useEffect( () => {
        onStartLoadingTodos();
    },[]);

    const loadingMsg = <div>....Loading</div>;
    const content = (
        <div className="todo-list">
            <ToDoForm/>
            {todos.length > 0 && todos.map( (todo,i) => <ToDoListItem 
                key={i} 
                todo={todo} 
                onRemove={onRemove} 
                onMarkCompleted={onMarkCompleted}/>)}
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