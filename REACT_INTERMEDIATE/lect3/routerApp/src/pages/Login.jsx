import React from 'react'
import Template from '../components/template'
import loginImg from "../../public/login.png"

const Login = ({setIsLogin}) => {
  return (
    
      <Template
      title="Welcome Back"
      desc1="Build skills for todays,tommorrow and beyond"
      desc2="Education to future-proof your career."
      image={loginImg}
      formtype="login"
      setIsLogin={setIsLogin}
      />

    
  )
}

export default Login
