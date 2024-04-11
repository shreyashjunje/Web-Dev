import React, { useState } from 'react'
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'; // Import eye icons from react-icons
import {toast} from "react-toastify"


 const SignupForm = () => {
    const[formData,setFormData]=useState({firstName:"" , lastName:"" ,email:"",password:"",confirmpassword:""})
    const[showPassword,setShowPassword]=useState(false)


    function changehandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    let submithandler=(event,{setLogin})=>{
            event.preventdefault();
            toast("account creted");
            console.log(formData);

    }

  return (
    <div>
        <div>
            <button>Student</button>
            <button>Instructor</button>
        </div>

        <form onSubmit={submithandler}>
            <div>
                {/* first name and last name */}
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input type='text' name='firstName' value={formData.firstName} onClick={changehandler} placeholder='enter first name' required/>
                    </label>

                    <label>
                        <p>last Name<sup>*</sup></p>
                        <input type='text' name='lastName' value={formData.lastName} onClick={changehandler} placeholder='enter last name'required/>
                    </label>
                </div>


                {/* email address */}

                <div>
                    <label>
                        <p>
                            Email Address <sup>*</sup>
                        </p>
                        <input type="text" name='email' value={formData.email} onClick={changehandler} placeholder='enter the email address'required/>
                    </label>
                </div>


                {/*  confirm password */}

                <div>
                    <label> 
                            <p>
                                create password<sup>*</sup>
                            </p>

                            <input type={showPassword?("text"):("password")}  name='password' value={formData.password} onChange={changehandler} placeholder='enter password'  required/>



                            <span onClick={()=>{
                                setShowPassword((prev)=>!prev)
                            }}>
                            {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                            </span>

                    </label>

                            <label> 
                        <p>
                            Confirm password<sup>*</sup>
                        </p>
                        <input type={showPassword?("text"):("password")}  name='confirmpassword' value={formData.confirmpassword} onChange={changehandler} placeholder='confirm password'  required/>



                        <span onClick={()=>{
                            setShowPassword((prev)=>!prev)
                        }}>
                        {showPassword ?  <RiEyeLine />: <RiEyeCloseLine />}
                        </span>

                        
                    </label>
                </div>



            </div>
            
            <button>
                Create Account
            </button>
           
        </form>
    </div>
  )
}

export default SignupForm;
