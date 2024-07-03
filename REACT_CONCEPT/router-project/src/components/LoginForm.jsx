import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate()

    const [formData,setFormData]=useState({email:"",password:""});
    const [showPassword,setShowPassword]=useState(false);

    function changehandler(event){
        

        setFormData(prevData=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value,
                
            }
            
        })
    }


function SubmitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In")
    navigate("/dashboard")
}
      
  return (
   <form onSubmit={SubmitHandler}>

        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
        
            <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={changehandler}
            placeholder='enter email address'
            />

        </label>
        <label>
            <p>
                Password<sup>*</sup>
            </p>
        
            <input
            required
            type={showPassword?("text"):("password")}
            name="Password"
            value={formData.Password}
            onChange={changehandler}
            placeholder='enter Password '
            />

            <span onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>) };
            </span>

            <Link to="#">

                <p>
                    Forgot Password
                </p>

            </Link>

        </label>

        <button>
            Sign In
        </button>


   </form>
  )
}


export default LoginForm