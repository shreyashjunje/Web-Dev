import React from 'react'
import SignUpImg from "../../public/signup.png"
import Template from '../components/template'

const SignUp = ({setIsLogin}) => {
  return (
    <Template
    title="Joins the millions learning to code with studyNotion for free"
    desc1="Build skills for todays,tommorrow and beyond"
    desc2="Education to future-proof your career."
    image={SignUpImg}
    formtype="signup"
    setIsLogin={setIsLogin}
    />
  )
}

export default SignUp
