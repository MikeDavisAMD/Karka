import React from "react";
export const Element = (props) => {
    return(
        <div>
            <h1>My Name is {props.Name} and My age is {props.Age}</h1>
        </div>
    )
}
export const Component = (props) => {
    return(
        <div>
            <ul>
                {props.list.map((data) => <li>{data}</li>)}
            </ul>
        </div>
    )
}