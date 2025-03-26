import React from 'react'
import {Box, Grid, Typography} from '@mui/material'

export const Home = () => {
  return (
    <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{height:"50px",textAlign:"center"}}>
                <Typography variant='h1'>
                    🙏Welcome🙏
                </Typography>
            </Box>
        </Grid>
    </Grid>
  )
}
