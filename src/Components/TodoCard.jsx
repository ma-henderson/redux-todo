import { Card, Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { delTodo, finishTodo } from '../Store/actions';
import { useDispatch } from 'react-redux';

const actionDispatch = (dispatch) => ({
  delTodoItem: (todo_id) => dispatch(delTodo(todo_id)),
  finishTodoItem: (todo_id) => dispatch(finishTodo(todo_id))
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 400,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    color: "#000000",
    fontWeight: 600,
  },
  titleDone: {
    fontSize: 18,
    textDecoration: "line-through",
    color: "#444"
  },
  button: {
    marginLeft: 10
  }
});

export default function TodoCard({ todoId, content, done }) {
  const classes = useStyles();
  const { delTodoItem, finishTodoItem } = actionDispatch(useDispatch());
  const handleDelete = (event) => (delTodoItem(todoId))
  const handleFinish = (event) => (finishTodoItem(todoId))

  return(
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={done ? classes.titleDone : classes.title} 
          color="textSecondary" 
          gutterBottom
        >
          {content}
        </Typography>
        {done || 
          <Button variant="contained" color="primary" onClick={handleFinish}>
            Done!
          </Button>
        }
        <Button 
          variant="contained" 
          color="secondary" 
          className={classes.button}
          onClick={handleDelete}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  )
}