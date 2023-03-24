import * as React from 'react';
import { useState, useEffect } from 'react';
import { Card, Avatar, IconButton, CardHeader, CardActions, CardContent, CardMedia, Button, Typography, Switch, createMuiTheme } from '@mui/material';
//import {Bar } from 'react-chartjs-2';
import { Chart } from './Chart.js';
import ThemeContext from '../context/ThemeContext.js';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';





export default function MediaCard({ addFavorite, deleteFavorite, myFavorites, image, name, id, logo, weight, height, habili, weakness, }) {
  const data = React.useContext(ThemeContext);
  console.log(myFavorites)
  
  return (
    <div className={data.theme}>

      <Card sx={{ maxWidth: 345, backgroundColor: 'green' }}>

        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'white', boxShadow: 5, padding: '5px', margin: '2px' }} aria-label='recipe' src={logo}></Avatar>
          }
          action={myFavorites.includes(id) ? 
            <StarIcon sx={{ color: yellow[500] }} fontSize="large" onClick={() => deleteFavorite(id)} /> : 
            <StarOutlineIcon fontSize="large" onClick={() => addFavorite(id)} />}
          titleTypographyProps={{ variant: 'h4', alig: 'left' }}
          title={name}
          subheader={id} />
        <CardMedia
          sx={{
            minHeight: '300px',
            maxHeight: '300px',
            padding: "15px",
            objectFit: "contain",
            backgroundColor: 'skyblue',
            width: "auto"

          }}
          image={image}
          title={name}
        />
        <CardContent>

          <Typography variant="body2" color="text.secondary" weight={weight} height={height}>
            Weight {weight} lbs, Height {height}
          </Typography>
          <Typography sx={{ padding: '5px' }} variant="body2" color="text.secondary"  >
            Weakness {weakness}
          </Typography>
          {/* <Bar width="200" height="200" data={data} options={options} /> */}
          <Chart></Chart>

        </CardContent>

      </Card>
      <label htmlFor='light'>Light</label>
      <Switch name="theme" onChange={data.handleTheme} value={data.theme} />
      <label htmlFor='dark'>Dark</label>




    </div>
  );
}