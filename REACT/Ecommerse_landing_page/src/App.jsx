import Navbar from "./components/Navbar.jsx";
import Leftside from "./components/leftside_div.jsx"
import Rightside from "./components/rightside_div.jsx";
import Categories from "./components/card_wrapper.jsx";
import QuoteDiv from "./components/quotediv.jsx";
import FeaturedDiv from "./components/featuredDiv.jsx"
import BlogDiv from "./components/vlogDiv.jsx"
import SubscribeSection from "./components/subscribe_section.jsx";
import Footer from "./components/footer.jsx"
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

      <div id="quote_div_page">
        <QuoteDiv/>
      </div>
      <div id="featured_page">

  
          <FeaturedDiv/>
      </div>


      <div id="blog_div_page">

        <BlogDiv/>
      </div>

      <div id="subscribe_div_page">
          <SubscribeSection/>
      </div>

      <div id="footer">
        <Footer/>
      </div>
        
    </div>
  )
}

export default App
