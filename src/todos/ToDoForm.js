import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createTodo } from './actions';

const ToDoForm = ({todos, onCreate}) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="todo-form">
            <input 
                className="todo-form-input" 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value) }  
                placeholder="type your todo here"
                />
                
            <button 
                className="todo-form-button"
                onClick={() => {
                    const isDuplicateTodo = todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateTodo) {
                        onCreate(inputValue);
                        setInputValue('');
                    }
                }}>Create</button>
        </div>
    )
}

const mapStateToProps = state => ({
   todos: state.todos 
})

const mapDispatchToProps = dispatch => ({
    onCreate: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(ToDoForm);