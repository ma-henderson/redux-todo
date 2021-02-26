import { Box, Container, Typography } from "@material-ui/core"
import TodoCard from '../Components/TodoCard';
import AddEntry from '../Components/AddEntry';
import { makeStyles } from '@material-ui/core/styles';

import { makeSelectTodos } from '../Store/selectors';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';

const stateSelector = createSelector(makeSelectTodos, (todos) => ({
  todos
}))

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function Todo(props) {
  const { todos } = useSelector(stateSelector)
  const classes = useStyles();

  return(
    <Container maxWidth="md" className={classes.root} style={{marginTop: 20}}>
    <Typography component="h1" gutterBottom>
      To-do List!
    </Typography> 
      <Box display="flex" alignItems="center" flexDirection="column">
        <AddEntry />
        {todos?.map((todo)=>(
          <TodoCard todoId={todo.id} content={todo.name} done={todo.done}/>
        ))}
       </Box>
    </Container>
  )
}