
import './App.css'
import { Route,Routes,NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Contact from './components/Contact'
import Dashboard from './components/Dashboard'
import Notfound from './components/Notfound'
import Home from './components/Home'
import About from './components/About'
import MainHeader from './components/MainHeader'


function App() {
  return (
    <div>
      
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
          
        </ul>
      </nav>
      
      <Routes>

        {/* way 1 without parent and children route */}
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<Notfound/>}/> */}


        {/* {way 2 with creating parent and child route} */}
        <Route path="/" element={<MainHeader/>}>
          {/* {default route} */}
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Route>

      </Routes>
    </div>
   
  )
}

export default App
