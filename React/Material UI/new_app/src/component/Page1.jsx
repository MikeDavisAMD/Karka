import React from 'react'
import Grid from '@mui/material/Grid2'
import {Box,Typography} from '@mui/material'

export const Page1 = () => {
  return (
    <Grid container>
        <Grid size={{lg:2.4, md:3, sm:4, xs:12}}>
            <Box sx={{height:"100px",backgroundColor:"blue"}}>
                <Typography variant='h1' sx={{color:"white",textAlign:"center"}}>
                    1
                </Typography>
            </Box>
        </Grid>
        <Grid size={{lg:2.4, md:3, sm:4, xs:12}}>
            <Box sx={{height:"100px",backgroundColor:"orange"}}>
                <Typography variant='h1' sx={{color:"white",textAlign:"center"}}>
                    2
                </Typography>
            </Box>
        </Grid>
        <Grid size={{lg:2.4, md:3, sm:4, xs:12}}>
            <Box sx={{height:"100px",backgroundColor:"red"}}>
                <Typography variant='h1' sx={{color:"white",textAlign:"center"}}>
                    3
                </Typography>
            </Box>
        </Grid>
        <Grid size={{lg:2.4, md:3, sm:4, xs:12}}>
            <Box sx={{height:"100px",backgroundColor:"brown"}}>
                <Typography variant='h1' sx={{color:"white",textAlign:"center"}}>
                    4
                </Typography>
            </Box>
        </Grid>
        <Grid size={{lg:2.4, md:3, sm:4, xs:12}}>
            <Box sx={{height:"100px",backgroundColor:"purple"}}>
                <Typography variant='h1' sx={{color:"white",textAlign:"center"}}>
                    5
                </Typography>
            </Box>
        </Grid>
    </Grid>
  )
}
