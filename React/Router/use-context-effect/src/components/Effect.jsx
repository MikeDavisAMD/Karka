// import React, { useEffect, useState } from 'react'
// // import {Button} from '@mui/material'

// export const Effect = () => {
//     const [count,setCount]=useState(0)
//     useEffect(()=>{
//         // console.log(`Rendered ${count}`)
//         // console.log("Rendered")
//         const timer = setTimeout(()=>{
//             setCount(count+1)
//         },1000)
//         return () => clearTimeout(timer)
//     })
//   return (
//     <div>
//         <h1>count: {count}</h1>
//         {/* <Button variant='contained' onClick={()=>setCount(count+1)}>Arise</Button> */}
//     </div>
//   )
// }
import React, { useEffect, useState } from "react";
import {Button} from '@mui/material'

export const Effect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Rendered!");
  },[count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button variant="contained" onClick={() => setCount(count+1)}>Arise</Button>
      <br />
      <br />
      <Button variant="contained" onClick={() => setCount(count-1)}>reduce</Button>
    </div>
  );
};