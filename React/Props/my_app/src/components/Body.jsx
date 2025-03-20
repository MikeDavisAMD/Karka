import React from 'react'
import { Component } from './Component'
export const Body = () => {
    const arr = ['Apple','orange','Banana']
    return (
        <>
            <Component list={arr}/>
        </>
    )
}
