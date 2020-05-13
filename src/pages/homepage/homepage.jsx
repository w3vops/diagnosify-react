import React from "react";
import "./homepage.style.css";
import NavBar from "../../components/navbar/navbar";
import CustomButton from "../../components/button/customButton";

const Homepage = () => {
    return (
        <div>
            <NavBar/>
            <div className="cover">
                <div className="overlay">
                    <h1>Skin disease diagnosis <br/>at your fingertips</h1>
                    <h3>Get more functionality on Android and iOS</h3>
                    <CustomButton text="Google play"/>
                    <CustomButton text="ios" alt={true}/>
                </div>
            </div>
        </div>
    )
}
export default Homepage;