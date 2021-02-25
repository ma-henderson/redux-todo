import { Box, Container, Typography } from "@material-ui/core"
import TodoCard from '../Components/TodoCard';
import AddEntry from '../Components/AddEntry';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});


export default function Todo(props) {
  const tasks = [
    {id: 0, name: 'Buy Milk'},
    {id: 1, name: 'Wash clothes'},
    {id: 2, name: 'Bake Cookies'},
    {id: 3, name: 'Pay Bills'}
  ]
  const classes = useStyles();

  return(
    <Container maxWidth="md" className={classes.root} style={{marginTop: 20}}>
    <Typography component="h1" gutterBottom>
      To-do List!
    </Typography> 
      <Box display="flex" alignItems="center" flexDirection="column">
        <AddEntry />
        {tasks?.map((task)=>(
          <TodoCard content={task}/>
        ))}
       </Box>
    </Container>
  )
}