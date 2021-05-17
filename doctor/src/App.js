import React from 'react'
import Login from "./components/Login/Login"
import "./App.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"; 
import Signup from './components/signup/Signup';


function App () {
    return (
        <div>
            <Router>
        
                         <Switch>    
                         <Route path = "/" exact component = {Login} />    
                         <Route path = "/signup" component = {Signup} /> 
                         </Switch> 

            </Router>
            
        </div>
    )};

export default App;