import React from "react";
import "./sidebar.style.css";


const UserSidebar = () => {
    return (
        <aside className='main-aside'>
            <div className="head">
                <h4 className="user">User</h4>
                <p>Email@gmail.com</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-camera-retro icons"/>
                <p className='take-scan'>Take scan</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-stethoscope icons"/>
                <p className='doctor'>My Doctor</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-file-medical icons"/>
                <p className='history'>Scan history</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-book-medical icons"/>
                <p className='book'>Disease book</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-comment-dots icons"/>
                <p className='feedback'>Feedback</p>
            </div>
        </aside>
    )
};

export default UserSidebar;