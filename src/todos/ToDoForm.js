import React, { useState } from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';

import { addTodo } from './thunk';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    
  }));

const ToDoForm = ({todos, onCreate, closeDialog, showSnackbar}) => {
    const classes = useStyles();
    const [inputValue, setInputValue] = useState('');
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField 
                        id="filled-basic" 
                        label="Your Todo"
                        size="small"
                        className={classes.margin}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} 
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button 
                        variant="contained" 
                        color="primary"
                        size="large"
                        className={classes.margin}
                        onClick={() => {
                            const isDuplicateTodo = todos && todos.some(todo => todo.text === inputValue);
                            if (!isDuplicateTodo) {
                                onCreate(inputValue);
                                setInputValue('');
                                showSnackbar('success', 'ToDo created');
                                closeDialog();
                            } else {
                                showSnackbar('error', 'Todo already exists!');
                            }
                        }}>
                        Create
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = state => ({
   todos: state.todos 
})

const mapDispatchToProps = dispatch => ({
    onCreate: text => dispatch(addTodo(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(ToDoForm);