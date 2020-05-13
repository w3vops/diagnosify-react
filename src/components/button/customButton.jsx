import React from "react";
import "./customButton.style.css";


const CustomButton = ({text, alt, color1, color2}) => {
    return (
        <>
            {
                alt ? <button className="diagnosify-button button2">{text}</button> : <button className="diagnosify-button">{text}</button>
            }
        </>
    )
}
export default CustomButton;