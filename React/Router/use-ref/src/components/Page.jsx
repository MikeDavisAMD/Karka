import { Box, Button } from '@mui/material'
import React, { useRef } from 'react'

export const Page = () => {
    const inputRef = useRef(null)

    const focusHandle = () =>{
        inputRef.current.focus()
    }

  return (
    <Box sx={{padding:"12px"}}>
        <input ref={inputRef} type="text" placeholder='click button to focus' style={{padding:"10px"}}/>
        <Button variant='contained' onClick={focusHandle}>Focus</Button>
    </Box>
  )
}
