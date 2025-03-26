import React from 'react'
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import {Link} from 'react-router-dom'

export const Main = () => {
  return (
    <Grid container>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box sx={{backgroundColor:"black",height:"100px"}}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Button variant="contained" href="/" sx={{margin:{lg:"10px",md:"10px",sm:"10px",xs:"1px"}}}>🏠</Button>
                <Button variant="contained" sx={{margin:{lg:"10px",md:"10px",sm:"10px",xs:"1px"}}}><Link to="/Task1" style={{textDecoration:"none",color:"white"}}>Task 1</Link></Button>
                <Button variant="contained" sx={{margin:{lg:"10px",md:"10px",sm:"10px",xs:"1px"}}}><Link to="/Task2" style={{textDecoration:"none",color:"white"}}>Task 2</Link></Button>
                <Button variant="contained" sx={{margin:{lg:"10px",md:"10px",sm:"10px",xs:"1px"}}}><Link to="/Task3" style={{textDecoration:"none",color:"white"}}>Task 3</Link></Button>
                <Button variant="contained" sx={{margin:{lg:"10px",md:"10px",sm:"10px",xs:"1px"}}}><Link to="/Task4" style={{textDecoration:"none",color:"white"}}>Task 4</Link></Button>
                <Button variant="contained" sx={{margin:{lg:"10px",md:"10px",sm:"10px",xs:"1px"}}}><Link to="/Task5" style={{textDecoration:"none",color:"white"}}>Task 5</Link></Button>
                <Button variant="contained" sx={{margin:{lg:"10px",md:"10px",sm:"10px",xs:"1px"}}}><Link to="/Task6" style={{textDecoration:"none",color:"white"}}>Task 6</Link></Button>
            </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}
