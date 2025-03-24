import React from 'react'
import {Box, Grid} from '@mui/material'

export const Task4 = () => {
  return (
    <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{display:"flex",justifyContent:"end",height:{lg:"40px",md:"40px",sm:"30px",xs:"20px"},backgroundColor:"#87CEEB"}}>
                <Box sx={{height:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},width:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},margin:{lg:"10px",md:"10px",sm:"8px",xs:"4px"},backgroundColor:"#76ABDF",borderRadius:"10px"}}></Box>
                <Box sx={{height:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},width:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},margin:{lg:"10px",md:"10px",sm:"8px",xs:"4px"},backgroundColor:"#76ABDF",borderRadius:"10px"}}></Box>
                <Box sx={{height:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},width:{lg:"20px",md:"20px",sm:"15px",xs:"10px"},margin:{lg:"10px",md:"10px",sm:"8px",xs:"4px"},backgroundColor:"#76ABDF",borderRadius:"10px"}}></Box>
            </Box>
        </Grid>
        <Grid item lg={12} md={12} sm={12} xs={12}>
            <Box sx={{height:{lg:"200px",md:"200px",sm:"150px",xs:"100px"}}}>
                <Box sx={{height:{lg:"180px",md:"180px",sm:"130px",xs:"90px"},margin:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},width:{lg:"96%",md:"96%",sm:"95%",xs:"94%"},backgroundColor:"#A4DDED"}}></Box>
            </Box>
        </Grid>
        <Grid container spacing={2}>
            <Grid item lg={3} md={3} sm={6} xs={12}>
                <Box sx={{height:{lg:"200px",md:"200px",sm:"150px",xs:"100px"},width:{lg:"96%",md:"96%",sm:"95%",xs:"94%"},marginLeft:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},marginBottom:{lg:"20px",md:"20px"},backgroundColor:"orange"}}></Box>
            </Grid>
            <Grid item lg={9} md={9} sm={6} xs={12}>
                <Box>
                    <Box sx={{height:{lg:"50px",md:"50px",sm:"30px",xs:"15px"},width:{lg:"94%",md:"94%",sm:"89%",xs:"94%"},marginLeft:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},marginBottom:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},backgroundColor:"lightgrey",marginTop:{lg:"5px",md:"5px",sm:"10px"}}}></Box>
                    <Box sx={{height:{lg:"50px",md:"50px",sm:"30px",xs:"15px"},width:{lg:"94%",md:"94%",sm:"89%",xs:"94%"},marginLeft:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},marginBottom:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},backgroundColor:"lightgrey"}}></Box>
                    <Box sx={{height:{lg:"50px",md:"50px",sm:"30px",xs:"15px"},width:{lg:"94%",md:"94%",sm:"89%",xs:"94%"},marginLeft:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},marginBottom:{lg:"20px",md:"20px",xs:"10px"},backgroundColor:"lightgrey"}}></Box>
                </Box>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
                <Box sx={{display:{lg:"none",md:"none",sm:"block",xs:"none"}}}>
                    <Box sx={{height:{lg:"50px",md:"50px",sm:"30px",xs:"15px"},width:{lg:"96%",md:"96%",sm:"95%",xs:"94%"},marginLeft:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},marginBottom:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},backgroundColor:"lightgrey",marginTop:{lg:"5px",md:"5px",sm:"10px"}}}></Box>
                    <Box sx={{height:{lg:"50px",md:"50px",sm:"30px",xs:"15px"},width:{lg:"96%",md:"96%",sm:"95%",xs:"94%"},marginLeft:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},marginBottom:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},backgroundColor:"lightgrey"}}></Box>
                    <Box sx={{height:{lg:"50px",md:"50px",sm:"30px",xs:"15px"},width:{lg:"96%",md:"96%",sm:"95%",xs:"94%"},marginLeft:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},marginBottom:{lg:"20px",md:"20px",sm:"20px",xs:"10px"},backgroundColor:"lightgrey"}}></Box>
                </Box>
            </Grid>
        </Grid>
    </Grid>
  )
}
