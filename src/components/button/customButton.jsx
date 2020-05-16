import React from "react";
import "./customButton.style.css";


const CustomButton = ({text, button_type, icon}) => {
    if (button_type === 'type1'){
        return <button className="diagnosify-button"><i className={icon}/> {text}</button>
    }else if (button_type === 'type2'){
        return <button className="diagnosify-button button2"><i className={icon}/>{text}</button>
    }else if (button_type === 'type3'){
        return <button className="diagnosify-button button3"><i className={icon}/>{text}</button>
    }
};
export default CustomButton;