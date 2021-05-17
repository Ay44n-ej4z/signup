import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className= "login"> 
            <form className="login__form">
            <h1>Sign in 🚪 </h1>
            <input type ="email" placeholder= "Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type ="password" placeholder= "Password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
            <button className="Fpassword" >Forgot password?</button>
            <button type = "submit" className="submit__btn"  >
            Sign In
            </button>
            <p className="option" >Or Sign In using</p>
            <button type = "submit" className="submit__btn1" />

            <Link to = "/signup" >
                     <button  className = "submit__btn2" > Sign up </button>  
            </Link>     
              
            </form>
        </div>
        
    )
}

export default Login
