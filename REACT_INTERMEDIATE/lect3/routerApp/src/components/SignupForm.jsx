import React, { useState } from 'react';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri'; // Import eye icons from react-icons
import { toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"

const SignupForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType,setAccountType] = useState("student")
  let navigate=useNavigate();

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formData.password!==formData.confirmPassword){
        toast("password does not mathch")
        return;
    }
    setIsLogin(true);
    toast('Account created');

    let accountData={
            ...formData
    };

    
    const finalData={
      ...accountData,
      accountType
    }

    console.log("printing final account data");
    console.log(finalData)
    navigate("/dashboard")




    
    
    
  };

  return (
    <div>
      <div>
        <button 
        className={`${accountType==="student" ? "bg-black text-white" : "bg-black-900 text-white"}`}
        onClick={()=>setAccountType("student")}>Student</button>
        <button
        className={`${accountType==="Instructor" ? "bg-black text-white" : "bg-black-900 text-white"}`}

         onClick={()=>setAccountType("Instructor")}>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div>
          {/* first name and last name */}
          <div>
            <label>
              <p>First Name<sup>*</sup></p>
              <input type='text' name='firstName' value={formData.firstName} onChange={changeHandler} placeholder='Enter first name' required />
            </label>

            <label>
              <p>Last Name<sup>*</sup></p>
              <input type='text' name='lastName' value={formData.lastName} onChange={changeHandler} placeholder='Enter last name' required />
            </label>
          </div>

          {/* email address */}
          <div>
            <label>
              <p>Email Address <sup>*</sup></p>
              <input type="text" name='email' value={formData.email} onChange={changeHandler} placeholder='Enter the email address' required />
            </label>
          </div>

          {/* create password and confirm password */}
          <div>
            <label>
              <p>Create Password<sup>*</sup></p>
              <input type={showPassword ? "text" : "password"} name='password' value={formData.password} onChange={changeHandler} placeholder='Enter password' required />
              <span onClick={() => setShowPassword(prev => !prev)}>
                {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
              </span>
            </label>

            <label>
              <p>Confirm Password<sup>*</sup></p>
              <input type={showConfirmPassword ? "text" : "password"} name='confirmPassword' value={formData.confirmPassword} onChange={changeHandler} placeholder='Confirm password' required />
              <span onClick={() => setShowConfirmPassword(prev => !prev)}>
                {showConfirmPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
              </span>
            </label>
          </div>
        </div>

        <button type='submit'>
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
