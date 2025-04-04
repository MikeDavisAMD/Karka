import React from 'react'
import {Page} from './components/Page'
import { Count } from './components/Count'
import { Count2 } from './components/Count2'
import { Fruits } from './components/Fruits'
import { FruitList } from './components/FruitList'

export const App = () => {
  return (
    <>
    <Page/>
    <Count/>
    <Count2/>
    <Fruits/>
    <FruitList/>
    </>
  )
}
