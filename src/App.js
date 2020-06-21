import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';

import MainData from './components/MainData'
import Hospital from './components/Hospital'
import pcrData from './components/pcrData'
import Map from './components/Map'

function App() {
  return (
    <div className="" style={{backgroundColor: ""}}>
      <BrowserRouter>
      <Switch>
     
      <Route path = {'/Map'} exact component={Map}/>
      <Route path = {'/pcrData'} exact component={pcrData}/>
      <Route path = {'/Hospital'} exact component={Hospital}/>
      <Route path = {'/'} exact component={MainData}/>
      </Switch>
      </BrowserRouter>
      {/* <MainData/> */}
      
    </div>
  );
}

export default App;
