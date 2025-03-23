import React from 'react'
import { Grid,Box,Typography } from '@mui/material'
export const Task3 = () => {
  return (
    <Grid container>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:"50px",backgroundColor:"#7DF9FF",textAlign:"center",paddingTop:"20px",marginLeft:"12px"}}>
                    <Typography variant='h4'>Header</Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:"50px",backgroundColor:"#7DF9FF",textAlign:"center",paddingTop:"20px",marginLeft:"12px",marginTop:"12px"}}>
                    <Typography variant='h4'>Content</Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={{height:"300px",backgroundColor:"#008080",textAlign:"center",paddingTop:"20px",marginLeft:"12px",marginTop:"12px"}}variant='h4'>
                    <Box sx={{height:"150px",backgroundColor:"#002244",margin:"20px"}}>

                    </Box>
                </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={{height:"300px",backgroundColor:"#008080",textAlign:"center",paddingTop:"20px",marginLeft:"12px",marginTop:"12px"}}variant='h4'>
                
                </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
                <Box sx={{height:"300px",backgroundColor:"#008080",textAlign:"center",paddingTop:"20px",marginLeft:"12px",marginTop:"12px"}}variant='h4'>
                
                </Box>
            </Grid>
        </Grid>
        <Grid container lg={12} md={12} sm={12} xs={12} spacing={2}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:"50px",backgroundColor:"#7DF9FF",textAlign:"center",paddingTop:"20px",marginLeft:"12px",marginTop:"12px"}}>
                    <Typography variant='h4'>Footer</Typography>
                </Box>
            </Grid>
        </Grid>
    </Grid>
  )
}
