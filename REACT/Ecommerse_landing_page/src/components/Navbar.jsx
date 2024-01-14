import "./Navbar.css"

function Navbar(){
    return(
        <div className="Navbar_main_div">
            <div>
                <h2>Red Plants</h2>
            </div>
            <div  className="anchor_div">
                <a href="">Home</a>
                <a href="#categories_page">Catalogue</a>
                <a href="">Contact</a>
            </div>
            <div className="anchor_div">
                <a href="">Search</a>
                <a href="">Cart(0)</a>
            </div>
        </div>
    )
}

export default Navbar;