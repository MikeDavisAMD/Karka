import React from 'react'
import { Grid,Box, Typography } from '@mui/material'

export const Task6 = () => {
  return (
    <Grid container sx={{color:"white"}}>
        <Grid container>
            <Grid item lg={1.5} md={1.5} sm={1.5} xs={12}>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"25px",xs:"20px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"5px"}}>
                    <Typography variant='p'>
                        Link 1
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={1.5} md={1.5} sm={1.5} xs={12}>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"25px",xs:"20px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"5px"}}>
                    <Typography variant='p'>
                        Link 2
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={1.5} md={1.5} sm={1.5} xs={12}>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"25px",xs:"20px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"5px"}}>
                    <Typography variant='p'>
                        Link 3
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={1.5} md={1.5} sm={1.5} xs={12}>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"25px",xs:"20px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"5px"}}>
                    <Typography variant='p'>
                        Link 4
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:{lg:"300px",md:"300px",sm:"300px",xs:"80px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"20px"}}>
                    <Typography variant='h4'>
                        Banner
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={6} md={6} sm={3} xs={12}>
                <Box sx={{height:{lg:"150px",md:"150px",sm:"400px",xs:"50px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"20px"}}>
                    <Typography variant='h4'>
                        Article 1
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={3} xs={12}>
                <Box sx={{height:{lg:"150px",md:"150px",sm:"400px",xs:"50px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"20px"}}>
                    <Typography variant='h4'>
                        Article 2
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={3} xs={12}>
                <Box sx={{height:{lg:"150px",md:"150px",sm:"400px",xs:"50px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"20px"}}>
                    <Typography variant='h4'>
                        Article 3
                    </Typography>
                </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={3} xs={12}>
                <Box sx={{height:{lg:"150px",md:"150px",sm:"400px",xs:"50px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"10px",borderRadius:"20px"}}>
                    <Typography variant='h4'>
                        Article 4
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{height:{lg:"25px",md:"25px",sm:"25px",xs:"20px"},backgroundColor:"#1ca9c9",margin:"5px",textAlign:"center",padding:"5px",borderRadius:"5px"}}>
                    <Typography variant='p'>
                        Footer
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    </Grid>
  )
}
