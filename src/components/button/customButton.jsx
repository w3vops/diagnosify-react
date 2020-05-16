import React from "react";
import "./customButton.style.css";
import {Link} from "react-router-dom";


const CustomButton = ({text, button_type, icon, link}) => {
    if (button_type === 'type1'){
        return <Link to={link}><button className="diagnosify-button"><i className={icon}/>{text}</button></Link>
    }else if (button_type === 'type2'){
        return <Link to={link}><button className="diagnosify-button button2"><i className={icon}/>{text}</button></Link>
    }else if (button_type === 'type3'){
        return <Link to={link}><button className="diagnosify-button button3"><i className={icon}/>{text}</button></Link>
    }
};
export default CustomButton;