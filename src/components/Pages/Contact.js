import React, {useState} from "react";
import Firebase from '../Firebase';
import "../Pages/Contact";

export const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [tel, settel] = useState("");
  const [message, setmessage] = useState("");

  const handleContact =(e)=>{
    e.preventDefault();

    const firestore = Firebase.firestore()
      firestore.collection("Contact Us").add({
        name: name,
        email: email,
        tel: tel,
        message: message,
      }).then(function (response){
        alert("we'll contact you soon..!");
      }).catch(function (error){
        alert("contact error")
      });
  }
  return (
    <div>
      <div className="contact_container" onSubmit={handleContact}>
        <form id="contact">
          <h3>Contact Us</h3>
          <h4>Contact us today, and get reply with in 24 hours!</h4>
          <fieldset>
            <input placeholder="Your name" autoComplete="off" value={name} onChange={(e)=>setname(e.target.value)} name="name" type="text" tabIndex="1" required autoFocus />
          </fieldset>   
          <fieldset>
            <input placeholder="Your Email Address" autoComplete="off" value={email} onChange={(e)=>setemail(e.target.value)} name="email" type="email" tabIndex="2" required />
          </fieldset>
          <fieldset>
            <input placeholder="Your Phone Number" autoComplete="off" value={tel} onChange={(e)=>settel(e.target.value)} name="tel" type="tel" tabIndex="3" required />
          </fieldset>
          {/* <fieldset>
            <input placeholder="Your Web Site starts with http://" type="url" tabindex="4" required />
          </fieldset> */}
          <fieldset>
            <textarea placeholder="Type your Message Here...." autoComplete="off" value={message} onChange={(e)=>setmessage(e.target.value)} name="message" tabIndex="5" required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
