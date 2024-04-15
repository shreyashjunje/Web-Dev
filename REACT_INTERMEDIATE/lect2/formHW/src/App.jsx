
import { useState } from 'react'
import './App.css'

function App() {


  const[formData,setFormData]=useState({Firstname: "", Lastname: "", email:"",Country:"India",streetAddress:"",City:"",State:"",postalCode: "", comments:false,candidates:false,offers:false,pushNotifications: "" })

  function changehandler(event){

    const {name,value,type,checked}=event.target;
    setFormData((prev)=>({...prev, [name]:type==="checkbox" ? checked : value}))
  }

  function submithandler(event){
    event.preventDefault();

    console.log(formData)
  }
  

  return (
   <div className='main_div'> 
      <form onSubmit={submithandler}>
          <label htmlFor="Firstname" >First name</label>
          <input type="text" placeholder='shreyash' id='Firstname' name='Firstname' value={formData.Firstname} onChange={changehandler}/>

          <label htmlFor="Lastname">Last Name</label>
          <input type="text" placeholder='junje' id='Lastname' name='Lastname'value={formData.Lastname} onChange={changehandler}/>

          <label htmlFor="email">Email address</label>
          <input type="email" placeholder='shreyash2003@gmail.com' id='email' name='email'value={formData.email} onChange={changehandler}/>

          <label htmlFor="Country">Country</label>
          <select name="Country" id="Country" value={formData.Country} onChange={changehandler}>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="America">America</option>
          </select>

          <label htmlFor="streetAddress">Street address</label>
          <input type="text" name='streetAddress' id='streetAddress' placeholder='1234 main st' value={formData.streetAddress} onChange={changehandler}/>

          <label htmlFor="City">City</label>
          <input type="text" placeholder='pune' id='City' name='City' value={formData.City} onChange={changehandler}/>

          <label htmlFor="State" >State / province</label>
          <input type="text" placeholder='maharashtra' id='State' name='State' value={formData.State} onChange={changehandler}/>

          <label htmlFor="postalCode" >ZIP / Postal code</label>
          <input type="number" placeholder='7232' id='postalCode' name='postalCode' value={formData.postalCode} onChange={changehandler}/>

          <fieldset>
            <legend>By Email</legend>

            <div className='email_div'>
              <input type="checkbox" id='comments' name='comments' checked={formData.comments} onChange={changehandler}/>
              <div>
                <label htmlFor="comments">Comments</label>
                <p>Get notified when someone posts a comments on a posting</p>
              </div>
            </div>

            <div className='email_div'>
              <input type="checkbox" id='candidates' name='candidates' checked={formData.candidates} onChange={changehandler}/>
              <div>
                <label htmlFor="candidates">candidates</label>
                <p>Get notified me when candidates offers a job</p>
              </div>
            </div>

            
            <div className='email_div'>
              <input type="checkbox" id='offers' name='offers' checked={formData.offers} onChange={changehandler}/>
              <div>
                <label htmlFor="offers">offers</label>
                <p>Get notified me when candidates accept or reject a offers</p>
              </div>
            </div>

          </fieldset>


          <fieldset >
            <legend>Push Notification</legend>
            <p>these are delivered via sms to your mobile phone</p>

            <div className='radio_div'>
              <input type="radio" id='pushEverything' name='pushNotifications' value="everything" onChange={changehandler}/>
              <label htmlFor="pushEverything">Everything</label>

              <br></br>
              <input type="radio" id='pushEmail' name='pushNotifications' value="Same as email" onChange={changehandler}/>
              <label htmlFor="pushEmail">Same as email</label>

              <br></br>


              <input type="radio" id='pushNothing' name='pushNotifications' value="Nothing" onChange={changehandler}/>
              <label htmlFor="pushNothing">No push notifications</label>
            </div>


          

          </fieldset>


          <button>Save</button>

      </form>
   </div>
  )
}

export default App
