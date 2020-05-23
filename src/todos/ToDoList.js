import React from 'react';
import { connect } from 'react-redux';

import { removeTodo, markTodoAsCompleted } from './actions'
import ToDoListItem from './ToDoListItem';
import ToDoForm from './ToDoForm';

const ToDoList = ({todos = [], onRemove, onMarkCompleted}) => {
    return (
        <div className="todo-list">
            <ToDoForm/>
            {todos.map( (todo,i) => <ToDoListItem key={i} todo={todo} onRemove={onRemove} onMarkCompleted={onMarkCompleted}/>)}
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos 
 })

 const mapDispatchToProps = dispatch => ({
     onRemove: text => dispatch(removeTodo(text)),
     onMarkCompleted: text => dispatch(markTodoAsCompleted(text))
 })

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);