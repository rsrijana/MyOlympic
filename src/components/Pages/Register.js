import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import Firebase from '../Firebase';
import "../Pages/Register"; 


export const Register = () => {
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [psw, setpsw] = useState("");
    const [ContactNo, setContactNo] = useState("");
    const history = useHistory();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const firestore = Firebase.firestore()
            firestore.collection("registration").add({
                username:username,
                email: email,
                psw: psw,
                ContactNo: ContactNo,
            }).then(function (response) {
                alert("registered successfully");
                history.push("/signup");
            }).catch(function (error){
                alert("failed to register..!")
            });
    }
    return(
        <div>
            <form action="/action_page.php" onSubmit={handleSubmit}>
                <div className="container_register">
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p><br/>
                    <hr/>
                        <label htmlFor="username"><b>Username</b></label> <br/>
                        <input type="text" placeholder="Enter username" autoComplete="off" value={username} onChange={(e)=>setusername(e.target.value)} name="username" id="username" required /><br/>

                        <label htmlFor="ContactNo"><b>Contact No</b></label>
                        <input type="text" placeholder="Enter Contact No" autoComplete="off" value={ContactNo} onChange={(e)=>setContactNo(e.target.value)}  name="ContactNo" id="ContactNo" required />
                    
                        <label htmlFor="email"><b>Email</b></label> <br/>
                        <input type="text" placeholder="Enter Email" autoComplete="off" value={email} onChange={(e)=>setemail(e.target.value)} name="email" id="email" required /><br/>

                        <label htmlFor="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" autoComplete="off" value={psw} onChange={(e)=>setpsw(e.target.value)} name="psw" id="psw" required />

                    <hr/>
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                    <button type="submit" className="registerbtn">Register</button>
                    <div className="signin">
                        <p>Already have an account?<Link to="/signup"><button className="btn_signup">Signup</button></Link></p>
                    </div>
                      
                </div>
            </form><br/><br/><br/>
        </div>
         
    )
}
