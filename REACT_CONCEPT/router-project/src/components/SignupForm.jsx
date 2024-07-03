import React, { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


 const SignupForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate()

    const [formData,setFormData]=useState({firstName:"",lastName:"",enail:"",password:"",confirmPassword:""});
    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    function changehandler(event){
        

        setFormData((prevData)=>{
            return{
                ...prevData,
                [event.target.name]:event.target.value,

            }
        })
    }
    function SubmitHandler(event){
        event.preventDefault();
        if(formData.password!=formData.confirmPassword){
            toast.error("password do not match")
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created")
        const Accountdata={
            ...formData,
        }
        console.log(Accountdata)
        navigate("/dashboard")

    }



  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={SubmitHandler}>

            {/* firstname and lastname */}
            <div>
                
                    <label>
                        <p>
                            First Name<sup>*</sup>
                        </p>
                    
                        <input
                        required
                        type="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={changehandler}
                        placeholder="First Name"
                        />

                    </label>
                    <label>
                        <p>
                            Last Name<sup>*</sup>
                        </p>
                    
                        <input
                        required
                        type="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={changehandler}
                        placeholder="Last Name"
                        />

                    </label>

                    
            </div>


            {/* enail address */}
            <div>
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
            </div>

            {/* password and confirm password */}
            <div>
                
                    <label>
                        <p>
                            create Password<sup>*</sup>
                        </p>
                    
                        <input
                        required
                        type={showPassword ? ("text"):("password")}
                        name="password"
                        value={formData.password}
                        onChange={changehandler}
                        placeholder="Enter Password"
                        />



                        <span onClick={()=>setShowPassword((prev)=>!prev)}>
                            <p>
                                {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                            </p>
                        </span>

                    </label>
                    <label>
                        <p>
                            Confirm Password<sup>*</sup>
                        </p>
                    
                        <input
                        required
                        type={showConfirmPassword ? ("text"):("password")}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={changehandler}
                        placeholder="Confirm Password"
                        />

                        <span onClick={()=>setShowConfirmPassword((prev)=>!prev)}>
                            <p>
                                {showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
                            </p>
                        </span>

                    </label>





            </div>


            <button>
                Create Acoount
            </button>






        </form>
    </div>
  )
}


export default SignupForm;