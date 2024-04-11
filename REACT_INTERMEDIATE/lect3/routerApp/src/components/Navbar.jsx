import React from 'react'
import Logo from "../../public/Logo.svg"
import {Link} from "react-router-dom"
import {toast} from "react-toastify"

 const Navbar = (props) => {

  let isLogin=props.IsLogin;
  let setIsLogin=props.setIsLogin;

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

        
        
        { !isLogin && 
          <Link to="./login">
            <button>
               Log in
            </button>
          </Link>
        }

        { !isLogin && 
          <Link to="./signup">
            <button>
               Sign Up
            </button>
          </Link>
        }
        { isLogin && 
          <Link to="./">
            <button onClick={()=>{
              setIsLogin(false);
              toast("Logged Out")
              
            }}>
               Log Out
            </button>
          </Link>
        }
        {isLogin && 
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