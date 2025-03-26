import React from 'react'
import {Grid,Box} from '@mui/material'
import {Link} from 'react-router-dom'

export const Header = () => {
  return (
    <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{height:"100px",backgroundColor:"yellow"}}>
                <Link to="/One">One</Link><br/>
                <Link to="/Two">Two</Link><br />
                <Link to="/Three">Three</Link><br />
                <Link to="/Four">Four</Link><br />
            </Box>
        </Grid>
    </Grid>
  )
}
