import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import ScrollToTop from "./utils/scroll-to-top";
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Welcome from "./pages/welcome/welcome";
import Dashboard from "./pages/dashboard/dashboard";


function App() {
    return<>
          <ScrollToTop/>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path='/welcome' component={Welcome} />
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
        <Footer/>
        </>

}

export default App;
