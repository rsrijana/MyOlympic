import React, { useState } from "react";
import "../Pages/signup";
import "../Pages/Signup.css";
import Firebase from "../Firebase"
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    
    // //send data to firestore
    const handleSignup = (e) => {
        e.preventDefault();

        const firestore = Firebase.firestore() //making firestore object
        firestore.collection("login").add({
            email: email,
            password: password,

        }).then(function (response) {
            alert("signup successful");
            history.push("/");
        }).catch(function (error) {
            alert("failed to signin ! please try again");
        });
        
    }
   
    return (
        <div>
            <div>
                <div className="signup">
                    <h2 className="signup-header">Log in</h2>
                    <form className="signup-container" onSubmit={handleSignup}>
                        <p><input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /></p>
                        <p><input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" /></p>
                        <a href="http://">forget password</a>
                        <button className="login" type="submit" id="login" data-submit="...Sending">Submit</button> 
                        
                    </form>
                </div>
            </div>

        </div>
    );
};
export default Signup;