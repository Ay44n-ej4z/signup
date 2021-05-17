import React, { useState } from "react";
import "./Signup.css"

const Signup = () => {

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhone] = useState("");


    return (
        <div className= "Signup"> 
            <form className="Signup__form">
            <h1>Sign up 🚪 </h1>
            
           
            <input type ="email" placeholder= "Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type ="password" placeholder= "Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type ="phonenumber" placeholder= " +91 XXXXXXXXXX " value={phoneNumber} onChange={(e) => setPhone(e.target.value)} />
            <input type ="Cpassword" placeholder= "Confrim Password" value={cpassword} onChange={(e) => setConfirmPassword(e.target.value)} /> 
            <button type = "submit" className="submit__btn"  >
            SignUp
            </button>
            <p className="option" >Or sign up using</p>
            <button type = "submit" className="submit__btn1" />     
            <button className = "submit__btn2" type = "submit"> Sign up </button>    
            </form>
     
        </div>
        
    )
}

export default Signup
