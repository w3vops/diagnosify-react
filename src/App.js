import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import ProtectedRoute from "./components/protected/ProtectedRoute";
import ScrollToTop from "./utils/scroll-to-top";
import {connect} from "react-redux";
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Welcome from "./pages/welcome/welcome";
import Dashboard from "./pages/dashboard/dashboard";


function App({isAuthenticated, isVerifying}) {
    return <>
        <ScrollToTop/>
        <NavBar/>
        <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path='/welcome' component={Welcome}/>
            <ProtectedRoute
                path="/dashboard"
                component={Dashboard}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
            />
        </Switch>
        <Footer/>
    </>

}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isVerifying: state.auth.isVerifying
    };
}

export default connect(mapStateToProps)(App);