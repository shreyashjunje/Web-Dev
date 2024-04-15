import { useState } from "react";
import "./subscribe_Section.css"



function SubscribeSection(){

    const[email,setEmail]=useState("");


    function clickhandler(event){
        setEmail(event.target.value);
        console.log(email.value);
        
    }


    return(
        <div className="subscribe_main_div">
            <div className="heading_section">
                <h2>Get 15% off your next order,</h2>
                <h2>Subscribe to our NewSletter</h2>
            </div>
            <div className="input_section">
                <input type="email" placeholder="Enter your email here" value={email.value}/>
                <button onClick={clickhandler}>Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeSection;