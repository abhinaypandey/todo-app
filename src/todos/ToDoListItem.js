import React from 'react';

const ToDoListItem = ({todo, onRemove, onMarkCompleted}) => {
    return (
        <div className="todo-list-item">
            <h3>{todo.text}</h3>
            {todo.isCompleted
                ? null
                : <button 
                    className="todo-list-btn-completed" 
                    onClick={() => onMarkCompleted(todo.text)}>Mark as completed
                </button>
            }
            
            <button className="todo-list-btn-remove" onClick={() => onRemove(todo.text)}>Remove</button>
        </div>
    );
}

export default ToDoListItem;