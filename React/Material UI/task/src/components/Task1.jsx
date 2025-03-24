import React from 'react'
import { Grid,Box } from '@mui/material'

export const Task1 = () => {
  return (
    <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{height:{lg:"150px",md:"100px",sm:"70px",xs:"30px"}, backgroundColor:"#00BFFF"}}></Box>
        </Grid>
        <Grid container>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <Box sx={{height:{lg:"600px",md:"400px",sm:"200px",xs:"100px"}, backgroundColor:"#DDA0DD"}}></Box>
            </Grid>
            <Grid item lg={8} md={8} xs={12} sx={{display:{lg:"block",md:"block",sm:"none",xs:"block"}}}>
              <Box sx={{height:{lg:"600px",md:"400px",sm:"200px",xs:"200px"}, backgroundColor:"white"}}></Box>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={12}>
              <Box sx={{height:{lg:"600px",md:"400px",sm:"200px",xs:"100px"}, backgroundColor:"#F0E68C"}}></Box>
            </Grid>
            <Grid item sm={12} sx={{display:{lg:"none",md:"none",sm:"block",xs:"none"}}}>
              <Box sx={{height:{sm:"180px"}, backgroundColor:"white"}}></Box>
            </Grid>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{height:{lg:"150px",md:"100px",sm:"70px",xs:"30px"}, backgroundColor:"#00BFFF"}}></Box>
        </Grid>
    </Grid>
  )
}
