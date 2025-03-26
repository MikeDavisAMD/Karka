import React from 'react'
import {Grid,Box,Typography} from '@mui/material'
import Image from '../Assets/Images/MikeText.jpg'

export const Portfolio = () => {
  return (
    <Grid container spacing={2}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{height:{lg:"500px",md:"500px",sm:"300px",xs:"100px"},display:"flex",justifyContent:"center",margin:"10px"}}>
                <img src={Image} alt="" />
            </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{height:"50px",textAlign:"center"}}>
                <Typography variant='p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum veniam itaque minus hic. Doloribus placeat dolore, dolorum veritatis hic facilis autem distinctio ab animi! Quod neque cupiditate culpa libero sed eligendi error delectus esse sapiente fuga, debitis voluptas maxime iste! Delectus veritatis laboriosam, repudiandae modi voluptas sit! Deleniti possimus vero animi nam modi eum similique perferendis cumque accusantium facilis quod non adipisci nemo repellendus sunt voluptate iure, a aut ipsum labore esse nobis optio! Harum consectetur minima, aspernatur dignissimos fugit perspiciatis quisquam corporis numquam hic. Repudiandae harum nostrum laboriosam nulla eveniet error cumque magnam minus, quibusdam veritatis tenetur, delectus quod!
                </Typography>
            </Box>
        </Grid>
    </Grid>
  )
}
