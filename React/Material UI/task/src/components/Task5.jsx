import React from 'react'
import {Grid,Box} from '@mui/material'

export const Task5 = () => {
  return (
    <Grid container>
        <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"60px",xs:"40px"},backgroundColor:"yellow",margin:"5px"}}></Box>
            </Grid>
            <Grid item lg={8} md={8} sm={8} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"60px",xs:"40px"},backgroundColor:"orange",margin:"5px"}}></Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:{lg:"50px",md:"50px",sm:"30px",xs:"20px"},backgroundColor:"red",margin:"5px"}}></Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:{lg:"300px",md:"300px",sm:"200px",xs:"100px"},backgroundColor:"#A4DDED",margin:"5px"}}></Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box sx={{height:{lg:"15px",md:"15px",sm:"25px",xs:"20px"},backgroundColor:"lightgrey",marginTop:{lg:"5px",md:"5px",sm:"10px",xs:"5px"},marginLeft:"5px",marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"5px"}}}></Box>
                <Box sx={{height:{lg:"15px",md:"15px",sm:"25px",xs:"20px"},backgroundColor:"lightgrey",marginTop:{lg:"30px",md:"30px",sm:"40px",xs:"20px"},marginLeft:"5px",marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"5px"}}}></Box>
                <Box sx={{height:{lg:"15px",md:"15px",sm:"25px",xs:"20px"},backgroundColor:"lightgrey",marginTop:{lg:"30px",md:"30px",sm:"40px",xs:"20px"},marginLeft:"5px",marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"5px"}}}></Box>
                <Box sx={{height:{lg:"15px",md:"15px",sm:"25px",xs:"20px"},backgroundColor:"lightgrey",marginTop:{lg:"30px",md:"30px",sm:"40px",xs:"20px"},marginLeft:"5px",marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"5px"}}}></Box>
                <Box sx={{height:{lg:"15px",md:"15px",sm:"25px",xs:"20px"},backgroundColor:"lightgrey",marginTop:{lg:"30px",md:"30px",sm:"40px",xs:"20px"},marginLeft:"5px",marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"5px"}}}></Box>               
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box sx={{display:{lg:"block",md:"block",sm:"block",xs:"none"},height:{lg:"200px",md:"200px",sm:"300px",xs:"100px"},backgroundColor:"#A4DDED",margin:"5px"}}></Box>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
                <Box sx={{display:{lg:"block",md:"block",sm:"block",xs:"none"},height:{lg:"200px",md:"200px",sm:"300px",xs:"100px"},backgroundColor:"#A4DDED",margin:"5px"}}></Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{display:{lg:"none",md:"none",sm:"block",xs:"none"},height:"100px",backgroundColor:"#A4DDED",margin:"5px"}}></Box>
            </Grid>
        </Grid>
    </Grid>
  )
}
