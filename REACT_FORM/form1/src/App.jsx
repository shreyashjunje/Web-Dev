import { useState } from "react";




function App(){

  const [formData,setformData]=useState({firstName:"",lastName:"",email:"",country:"",streetAddress:"",city:"",
    state:"",ZIP:"",ByEmail:"",
  });
  console.log(formData)

  function changeHandler(event){
    const {name,type,value,checked}=event.target;

    setformData(prevformData=>{
      return{

        ...prevformData,
        [name]:value,

      }
      
    })
  }


    return (
      <div>
        <form action="">

          <label htmlFor="firstName">First Name</label>
          <br></br>
          <input
           type="text" 
           placeholder="Enter your first name"
           name="firstName" 
           onChange={changeHandler}
           value={formData.firstName}
           id="firstName"
           />

           <br></br>
           <br></br>

          <label htmlFor="lastName">Last Name</label>
          <br></br>
          <input
           type="text" 
           placeholder="Enter your last name"
           name="lastName" 
           onChange={changeHandler}
           value={formData.lastName}
           id="lastName"
           />

          <br></br>
          <br></br>
          
          <label htmlFor="email">Email Address</label>
          <br></br>
          <input
           type="email" 
           placeholder="Enter your email here"
           name="email" 
           onChange={changeHandler}
           value={formData.email}
           id="email" 
           />

           <br></br>
           <br></br>

           <label htmlFor="country">Country</label>
           <br />
           
           <select name="country" id="country" onChange={changeHandler}>
            <option value="INDIA" checked>INDIA</option>
            <option value="USA">USA</option>
            <option value="CANADA">CANADA</option>
            <option value="JAPAN">JAPAN</option>
           </select>

           <br />
           <br />

           <label htmlFor="streetAddress">Street Address</label>
          <br></br>
          <input
           type="text" 
           placeholder="Enter your street Address"
           name="streetAddress" 
           onChange={changeHandler}
           value={formData.streetAddress}
           id="streetAddress" 
           />

           <br></br>
           <br></br>
          

          <label htmlFor="city">City</label>
          <br></br>
          <input
           type="text" 
           placeholder="Enter your city"
           name="city" 
           onChange={changeHandler}
           value={formData.city}
           id="city" 
           />

           <br></br>
           <br></br>

          <label htmlFor="state">State/Province</label>
          <br></br>
          <input
           type="text" 
           placeholder="Enter your state"
           name="state" 
           onChange={changeHandler}
           value={formData.state}
           id="state" 
           />

           <br></br>
           <br></br>

          <label htmlFor="ZIP">ZIP/Portal Code</label>
          <br></br>
          <input
           type="text" 
           placeholder="Enter your ZIP"
           name="ZIP" 
           onChange={changeHandler}
           value={formData.sZIPtate}
           id="ZIP" 
           />

           <br></br>
           <br></br>


           <label htmlFor="ByEmail"></label>
           <div>
             
           </div>











        </form>
      
      </div>

      
    );

}

export default App;