// import { dividerClasses } from "@mui/material";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Route , Routes } from "react-router-dom";
import {useState} from 'react'
import Home from "./pages/Home";
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";



function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);




  return(
      <div>
          <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          

          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
            <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>

          </Routes>
          
      </div>
  )
}

export default App;
