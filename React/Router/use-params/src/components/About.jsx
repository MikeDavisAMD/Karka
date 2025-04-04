import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

export const About = () => {
    const {id} = useParams()
    const [error,setError]=useState(null)
    const [user,setUser]=useState(()=>{
      fetchData(id)
      return null
    })
    async function fetchData(id) {
      try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        let data = await response.json()
        if(!response.ok){
          throw new Error("User Not Found")
        }
        setUser(data)
        setError(null)
      }catch(error){
        setError(error.message)
        setUser(null)
      }
    }
  return (
    <Box>
      {error ? <p style={{color:"red"}}>{error}</p>:null}
      {user ? (
          <Box>
            <h1>Name: {user.name}</h1>
            <h4>User Name: {user.username}</h4>
            <h4>Email: {user.email}</h4>
            <h4>Mobile: {user.phone}</h4>
            <h4>Website: {user.website}</h4>
            <h4>Company: {user.company.name}</h4>
          </Box>
        ):null}
    </Box>
  )
}
