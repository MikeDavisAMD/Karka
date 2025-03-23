import React from 'react'
import { Grid,Box } from '@mui/material'

export const Task2 = () => {
  return (
    <Grid container>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"80px",xs:"50px"},backgroundColor:"orangered",marginLeft:"12px"}}></Box>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"80px",xs:"50px"},backgroundColor:"orangered",marginLeft:"12px"}}></Box>
            </Grid>
        </Grid>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:{lg:"600px",md:"600px",sm:"300px",xs:"70px"},backgroundColor:"#ADFF2F",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
        </Grid>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={{height:{lg:"300px",md:"300px",sm:"100px",xs:"100px"},backgroundColor:"blue",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={{height:{lg:"300px",md:"300px",sm:"100px",xs:"100px"},backgroundColor:"blue",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={{height:{lg:"300px",md:"300px",sm:"100px",xs:"100px"},backgroundColor:"blue",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
        </Grid>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"80px",xs:"50px"},backgroundColor:"grey",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"80px",xs:"50px"},backgroundColor:"grey",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"80px",xs:"50px"},backgroundColor:"grey",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
                <Box sx={{height:{lg:"100px",md:"100px",sm:"80px",xs:"50px"},backgroundColor:"grey",marginLeft:"12px",marginTop:"12px"}}></Box>
            </Grid>
        </Grid>
    </Grid>
  )
}
