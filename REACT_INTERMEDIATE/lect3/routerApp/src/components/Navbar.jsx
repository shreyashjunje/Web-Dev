import React from 'react'
import Logo from "../../public/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"

 const Navbar = (props) => {

  let IsLoggedIn=props.isLogin;
  let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div className='flex justify-evenly'>

     

      <Link to="/">
        <img src={Logo} alt="logo" width={160} height={32} loading='lazy'/>
      </Link>


      <nav>
        <ul className='flex gap-4'>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/">About</Link>
          </li>

          <li>
            <Link to="/">Contacts</Link>
          </li>

         
        </ul>
      </nav>

      <div className='flex gap-4'>

        
        
        { !IsLoggedIn && 
          <Link to="./login">
            <button>
               Log in
            </button>
          </Link>
        }

        { !IsLoggedIn && 
          <Link to="./signup">
            <button>
               Sign Up
            </button>
          </Link>
        }
        { IsLoggedIn && 
          <Link to="./">
            <button onClick={()=>{
              setIsLoggedIn(false);
              toast("Logged Out")
              
            }}>
               Log Out
            </button>
          </Link>
        }
        {IsLoggedIn && 
          <Link to="./dashboard">
            <button>
               Dashboard
            </button>
          </Link>
        }
      </div>

      

    </div>
  )
}

export default Navbar