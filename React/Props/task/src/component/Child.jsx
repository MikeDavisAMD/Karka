import React from 'react'

export const Child = (props) => {
  return (
    <div>
        <table border={"2px"}>
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Place</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map((Name,index)=>(
                    <tr>
                        <td>{index+1}</td>
                        <td>{Math.floor(Math.random()*(99999-9999)+9999)}</td>
                        <td>{Name.Name}</td>
                        <td>{Name.Age}</td>
                        <td>{Name.Place}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
