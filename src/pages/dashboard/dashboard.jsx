import React from "react";
import "./dashboard.style.css";
import UserSidebar from "../../components/sidebar/userSidebar";
import DoctorSidebar from "../../components/sidebar/doctorSidebar";


const Dashboard = () => {
    return (
        <div className='main-dashboard'>
            <div className="sidebar">
                {/*<UserSidebar/>*/}
                <DoctorSidebar/>
            </div>
            <div className="dashboard">
                <h1>Coming soon</h1>
            </div>
        </div>
    )
};

export default Dashboard;