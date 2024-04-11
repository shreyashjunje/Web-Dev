import React, { useState } from 'react'
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'; // Import eye icons from react-icons
import { Link } from 'react-router-dom';
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"



 const LoginForm = ({setIslogin}) => {

    const[formData,setFormData]=useState({email:"",password:""})
    const[showPassword,setShowPassword]=useState(false)
    const navigate=useNavigate();

    function changehandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submithandler(event){
        event.preventDefault();
        setIslogin(true);
        toast("LOgged in")
        navigate("/dashboard")
        
        
    }

    return (
    <div>

        <form onSubmit={submithandler}>
            
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input type="text" name='email' value={formData.email} onChange={changehandler} placeholder='enter the email address'required/>



            </label>

            <label> 
                <p>
                    password<sup>*</sup>
                </p>
                <input type={showPassword?("text"):("password")}  name='password' value={formData.password} onChange={changehandler} placeholder='enter password'  required/>



                <span onClick={()=>{
                    setShowPassword((prev)=>!prev)
                }}>
                  {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                </span>

                <Link to="# ">
                    <p>Forgot Password</p>
                </Link>
            </label>
           
           <button >
            Sign in
           </button>

        </form>
        
    </div>
  )
}

export default LoginForm;
