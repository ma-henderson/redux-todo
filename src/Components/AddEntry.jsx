import { Box, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { useDispatch } from 'react-redux';
import { setNewTodo } from '../Store/actions'

const actionDispatch = (dispatch) => ({
  addNewTodo: (todo) => dispatch(setNewTodo(todo)),
});

export default function AddEntry(props) {
  const [state, setState] = useState('')
  const handleChange = (event) => {
    setState(event.target.value)
  }
  const { addNewTodo } = actionDispatch(useDispatch());
  const handleClick = (event) => (addNewTodo(state))
  

  return(
    <Box>
      <TextField id="outlined-basic" label="Add an item" variant="outlined" onChange={handleChange}/>
      <Button
        variant="contained"
        style={{backgroundColor: 'green', color: 'white', maxWidth: 80}}
        startIcon={<CreateOutlinedIcon />}
        size="small"
        onClick={handleClick}
      >
        Add Task
      </Button>
    </Box>
  )
}