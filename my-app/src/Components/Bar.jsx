import * as React from 'react';
import {IconButton,Button,Typography,Toolbar,Box,AppBar, SpeedDial,} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import BuildSharpIcon from '@mui/icons-material/BuildSharp';
import {Link} from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Selectbar from './Selectbar';
import Speed1 from './Speed1'
const Bar=()=> {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Toolbar variant='dense' sx={{ minHeight: 20, height: 100 }}>
      <div style={{paddingRight:'520px'}}>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
         <Link to={"/Home"}><HomeIcon /></Link>
       </IconButton>
       </div>
       <div style={{paddingRight:'500px'}}>
      <Typography variant="h3" component="div" >Home</Typography>
       </div>
       <Speed1 />
        <IconButton size="large" edge="start" color="inherit" aria-label="BuildSharp" sx={{ mr: 2 }} >
          <BuildSharpIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Bar;
