import React from "react";
import "./customButton.style.css";
import {Link} from "react-router-dom";
import Google from "../../assets/images/google.png";


const CustomButton = ({text, button_type, icon, link}) => {
    if (button_type === 'type1'){
        return <Link to={link}><button className="diagnosify-button"><i className={icon}/>{text}</button></Link>
    }else if (button_type === 'type2'){
        return <Link to={link}><button className="diagnosify-button button2"><i className={icon}/>{text}</button></Link>
    }else if (button_type === 'type3'){
        return <Link to={link}><button className="diagnosify-button button3"><i className={icon}/>{text}</button></Link>
    }else if (button_type === 'submit'){
        return <button className="diagnosify-button button" type='submit'>{text}</button>
    }else if (button_type === 'google'){
        return <button className="diagnosify-button button4"><img src={Google} alt="google icon" className='google'/>{text}</button>

    }
};
export default CustomButton;