import React from 'react'

export const Listname = (props) => {
  return (
    <div>
        <h1>My name is {props.Name} and My Location is {props.Place}</h1>
        <ol>
            {props.list.map(data=><li>{data}</li>)}
        </ol>
    </div>
  )
}
