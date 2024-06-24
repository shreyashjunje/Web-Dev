import React from 'react'
import { useNavigate } from 'react-router-dom';

 const About=() => {
  const navigate=useNavigate();

  function clickHandler(){
    //mave to dashboard
    navigate("/dashboard");
  }

  
  return (
        <div>
            <div>About</div>
            <button onClick={clickHandler}>move to dashboard page</button>
        </div>
    
  )
}

export default About;
