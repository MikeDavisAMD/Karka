import React from "react";
import { Element } from "./components/Component.jsx";
import { Body } from "./components/Body.jsx"
import { Listname } from "./components/Listname.jsx";
export const App = () => {
  const arr=['Red','Blue','White','Indigo','Brown','Black']
  return(
    <>
      <Element Name="Mike Davis" Age={25}/>
      <Body/>
      <Listname Name="Karka Academy" Place="Nagercoil" list={arr}/>
    </>
  )
}