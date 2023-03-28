import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import {Switch} from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {
  const navigate = useNavigate();
  return (
    
    <Box sx={{ flexGrow: 1 }}>
      
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Pokedex
          </Typography>
          <Button color="inherit" onClick={()=>{navigate('/home')}}> Home </Button>
          <Button color="inherit" onClick={()=>{navigate('/login')}}> Login </Button>
          <Button color="inherit" onClick={()=>{navigate('/favorites')}}> Favorites </Button>
          <Switch></Switch>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}