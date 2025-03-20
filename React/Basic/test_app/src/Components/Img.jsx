import React from "react";
import img from "../Assets/Image/image1.jpg"
import "../App.css"
export const Img =() =>{
    return(
        <>
            <div className="header">
                <h1>Welcome to My React App</h1>
            </div>
            <div className="image">
                <img src={img} alt="" />
            </div>
        </>
    )
}