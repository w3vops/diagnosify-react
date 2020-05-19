import React from "react";

const DoctorSidebar = () => {
    return (
        <aside className='main-aside doctor-aside'>
            <div className="head">
                <h4 className="user">Doctor</h4>
                <p>Email@gmail.com</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-procedures icons"/>
                <p className='take-scan'>Patients</p>
            </div>
            <div className="aside-element">
                <i className="fas fa-file-medical icons"/>
                <p className='history'>History</p>
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

export default DoctorSidebar;