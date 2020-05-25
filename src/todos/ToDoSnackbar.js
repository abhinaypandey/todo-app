import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const ToDoSnackbar = ({open,type, msg, handleClose}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar 
        open={open}
        onClose={handleClose}
        anchorOrigin={ {vertical:'top', horizontal:'center' }}
        autoHideDuration={5000}>
        { type === 'error' 
          ?  <Alert onClose={handleClose} severity="error">
              {msg}
            </Alert>
          : <Alert onClose={handleClose} severity="success">
              {msg}
            </Alert>
            
      }
        
      </Snackbar>
    </div>
  );
}

export default ToDoSnackbar;
