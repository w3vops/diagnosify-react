import React from 'react';
import './App.css';
import Homepage from "./pages/homepage/homepage";
import ScrollToTop from "./utils/scroll-to-top";
import {Switch, Route} from "react-router-dom";


function App() {
    return<>
          <ScrollToTop/>
          <Switch>
            <Route path="/" exact component={Homepage}/>
          </Switch>
        </>

}

export default App;
