import React from 'react'
import { Typography,Button,TextField } from '@mui/material';
const Add = () => {
  return (
    <div>
        <br /><br /><br /><br />
        <Typography variant='h4'>Blog-Name:<TextField variant='outlined' label='Enter Blog Name'></TextField></Typography>
        <br /><br />
        <Typography variant='h4'>Author-
        Name:<TextField variant='outlined' label='Enter Author Name'></TextField></Typography>
        <br /><br />
        <Typography variant='h4'>Description:<TextField variant='outlined' label='Description about Blog'></TextField></Typography>
        <br /><br />
        <Button variant='contained' color='success'>Submit</Button>
        
    </div>
  )
}
export default Add;
