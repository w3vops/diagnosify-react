import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import ScrollToTop from "./utils/scroll-to-top";
import {Switch, Route} from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import SignUp from "./pages/signup/signup";


function App() {
    return<>
          <ScrollToTop/>
          <NavBar/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        <Footer/>
        </>

}

export default App;
