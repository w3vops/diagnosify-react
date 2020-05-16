import React from "react";
import "./card.style.css";


const CustomCard = ({image, info, name, facebook, linkedIn, twitter, expertise}) => {
    return (
        <>
            <div className="card">
                <div className="image-container">
                    <div className="image" style={{backgroundImage: `url(${image})`}}>
                    </div>
                </div>
                <div className="info">
                    <h5>{name}</h5>
                    <p>{info}</p>
                    <a href={twitter} className="fab fa-twitter" target="_blank" rel="noopener noreferrer"/>
                    <a href={facebook} className="fab fa-facebook-f" target="_blank" rel="noopener noreferrer"/>
                    <a href={linkedIn} className="fab fa-linkedin" target="_blank" rel="noopener noreferrer"/>
                </div>
            </div>
        </>
    )
};
export default CustomCard;