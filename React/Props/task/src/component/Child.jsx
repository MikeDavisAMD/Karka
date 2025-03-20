import React from 'react'

export const Child = (props) => {
  return (
    <>
    <div className='head'>
        <h1>Table With React</h1>
    </div>
    <div className='div'>
        <table>
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
                    <tr key={Name.ID}>
                        <td>{index+1}</td>
                        <td>{Name.ID}</td>
                        <td>{Name.Name}</td>
                        <td>{Name.Age}</td>
                        <td>{Name.Place}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
  )
}
