import React from 'react'
import Grid from '@mui/material/Grid2'
import { Box,Typography } from '@mui/material'

export const Page2 = () => {
  return (
    <Grid container>
        {['blue','orange','red','brown','purple'].map((color,index)=>(
            <Grid key={index}size={{lg:2.4, md:3, sm:4, xs:12}}>
                <Box sx={{height:"100px",backgroundColor:color}}>
                    <Typography variant='h1' sx={{color:"white",textAlign:"center"}}>
                        {index+1}
                    </Typography>
                </Box>
            </Grid>
        ))}
    </Grid>
  )
}
