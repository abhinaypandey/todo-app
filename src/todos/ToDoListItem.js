import React from 'react';

//material components
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import CardHeader from '@material-ui/core/CardHeader';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: 10,
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    margin: {
        margin: theme.spacing(1),
    },
    card: {
        maxWidth: 345,
        margin: theme.spacing(2),
    },
    media: {
        height: 190,
    },
    
}));

const ToDoListItem = ({todo, onRemove, onMarkCompleted, loading}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} raised={true}>
            {/* <CardHeader
                action={
                    <Fab color="secondary" size="small" aria-label="edit">
                        <EditIcon />
                    </Fab>
                }
            /> */}
            <CardContent>
                {loading 
                ?   (
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                    )
                :   (
                    <React.Fragment>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {todo.created_at}
                        </Typography>
                        <Typography variant="h5" component="h2">
                            {todo.text}
                        </Typography>
                    </React.Fragment>
                )}
                
                
            </CardContent>
            <CardActions>
                {todo.isCompleted
                    ? null
                    : <IconButton
                        aria-label="Mark as Done" 
                        className={classes.margin} 
                        onClick={() => onMarkCompleted(todo)}>
                        <DoneIcon />
                    </IconButton>
                }
    
                <IconButton aria-label="Remove" className={classes.margin} onClick={() => onRemove(todo.id)}>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default ToDoListItem;