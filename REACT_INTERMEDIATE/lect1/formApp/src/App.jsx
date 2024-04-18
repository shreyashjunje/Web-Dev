import { useState } from 'react'

import './App.css'

function App() {
  const [formData,setFormData]=useState({fistName: "", lastName: "" , email:"" , comments: "", isVisible: true});
  console.log(formData);
  function changehandler(event){
    const {name,type,checked,value}=event.target;
    

    setFormData(prevFormData=>{
      
      return{
        ...prevFormData,
        [name]: type==="checkbox" ? checked : value
      }
    })
  }
  return (
   <div className='main_div'>
      <input type="text" placeholder='first name' onChange={changehandler} name="firstName" value={formData.firstName}/>
      <input type="text" placeholder='last name'onChange={changehandler} name="lastName" value={formData.lastName}/>
      <input type="email" placeholder='email' onChange={changehandler} name='email' value={formData.email}/>
      <textarea placeholder='enter your comments' onChange={changehandler} name='comments' value={formData.comments}></textarea>
      <input type='checkbox' onChange={changehandler} name='isVisible' id='isVisible' checked={formData.isVisible}/>
      <label htmlFor="isVisible"> Am I visible</label>
   </div>
  )
}




export default App
