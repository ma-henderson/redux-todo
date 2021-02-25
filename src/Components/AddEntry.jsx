import { Box, TextField, Button } from '@material-ui/core';
import { useState } from 'react';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

export default function AddEntry(props) {
  const [state, setState] = useState('')
  const handleChange = (event) => {
    console.log(event.target.value);
  }
  return(
    <Box>
      <TextField id="outlined-basic" label="Add an item" variant="outlined" onChange={handleChange}/>
      <Button
        variant="contained"
        style={{backgroundColor: 'green', color: 'white', maxWidth: 80}}
        startIcon={<CreateOutlinedIcon />}
        size="small"
      >
        Add Task
      </Button>
    </Box>
  )
}