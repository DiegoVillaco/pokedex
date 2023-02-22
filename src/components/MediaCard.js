import * as React from 'react';
import { useState,useEffect } from 'react';
import {Card,Avatar,IconButton, CardHeader, CardActions, CardContent, CardMedia, Button,Typography} from '@mui/material';
//import {Bar } from 'react-chartjs-2';
import {Chart} from './Chart.js';




export default function MediaCard({image, name, id, logo, weight,height,habili,weakness }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'green' }}>
      <CardHeader 
      avatar={
        <Avatar sx= {{bgcolor:'white', boxShadow: 5, padding: '5px', margin:'2px' }} aria-label='recipe' src={logo}></Avatar>
      }
      titleTypographyProps={{variant:'h4', alig:'left'}}
      title={name}
      subheader={id}/>
      <CardMedia
        sx={{ 
            minHeight: '300px',
            maxHeight: '300px',
            padding:"15px",
            objectFit:"contain",
            backgroundColor : 'skyblue',
            width: "auto"

     }}
        image={image}
        title={name}
      />
      <CardContent>
        
        <Typography variant="body2" color="text.secondary" weight={weight} height={height}>
          Weight {weight} lbs, Height {height} 
        </Typography>
        <Typography sx={{padding:'5px'}} variant="body2" color="text.secondary"  >
          Weakness {weakness}
        </Typography>
        {/* <Bar width="200" height="200" data={data} options={options} /> */}
        <Chart></Chart>
        
      </CardContent>
     
    </Card>
  );
}