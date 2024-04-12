import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import SignUp from "./pages/SignUp.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Navbar from "./components/Navbar.jsx";
import {Route,Routes} from "react-router-dom"
import PrivateRoute from "./components/privateRoute.jsx";



import './App.css'
import { useState } from "react";


function App() {
  const [IsLogin,setIsLogin]=useState(false);
  

  return(
    
      <div>
          <Navbar IsLogin={IsLogin} setIsLogin={setIsLogin}/>
          

          <Routes>
                <Route path="/" element={<Home IsLogin={IsLogin}/>}></Route>
                <Route path="/login" element={<Login  setIsLogin={setIsLogin}/>}></Route>
                <Route path="/signup" element={<SignUp  setIsLogin={setIsLogin}/>}></Route>
                <Route path="/dashboard" element={
                  <PrivateRoute IsLogin={IsLogin}>
                      <Dashboard/>
                  </PrivateRoute>
              
                }></Route>
          </Routes>
       </div>
    
    
  )
}

export default App
