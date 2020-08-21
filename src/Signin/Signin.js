import React from 'react';
const Signin  = ()=>{
    return(
<div className="contact-form">
        <h2>Contact Form</h2>
        <form>
            <p>Email</p>
            <input type="text" name="" placeholder="Enter Email"></input>
            <p>Password</p>
            <input type="password" name="" placeholder="Enter Password"/>
            <input type="submit" name="" value="Sign In"/>
            {/* <input type="checkbox"> Remember Me</input> */}
        </form>
    </div>
   );
}
export default Signin;
 