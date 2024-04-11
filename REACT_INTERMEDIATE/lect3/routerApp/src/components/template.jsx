import React from 'react'
import LoginForm from "./LoginForm.jsx"
import SignupForm from './SignupForm.jsx'
import FrameImg from "../../public/frame.png"


 const Template = ({setIsLogin,title,desc1,desc2,image,formtype}) => {
  return (
    <div>

        <div>
            <h1>{title}</h1>
           <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
           </p>
      

        {formtype==="signup"?(<SignupForm setIsLogin={setIsLogin} />):(<LoginForm setIsLogin={setIsLogin}/>)}

        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>

        <button>
            <p>Sign Up with Google</p>
        </button>

      </div>

      <div>
        <img src={FrameImg} alt="frameImg" width={558} height={504} loading="lazy"/>
        <img src={image} alt="form image" width={558} height={490} loading="lazy"/>
      </div>


    </div>
  )
}

export default Template;


