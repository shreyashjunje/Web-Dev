import Navbar from "./components/Navbar.jsx";
import Leftside from "./components/leftside_div.jsx"
import Rightside from "./components/rightside_div.jsx";
import Categories from "./components/card_wrapper.jsx";
import './App.css'

function App() {

  return (
     <div id="main_div_page">

      <div id="home_page">
        <Navbar/>
          <div className="main_content">
            <Leftside/>
            <Rightside/>
          </div>

      </div>
       
      <div id="categories_page">
        <Categories/>
      </div>

      <div>
        
      </div>




    </div>
  )
}

export default App
