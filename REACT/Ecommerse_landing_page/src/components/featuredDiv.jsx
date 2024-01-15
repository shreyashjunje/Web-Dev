import "./featuredDiv.css"
import FeaturedCard from "./featuredCard"

function FeaturedDiv(){
    return(
        <div className="featured_main_div">
            <div className="featured_info_div">
                <h2>Featured</h2>
                <p>Our plants are 100% organic,<br></br>we don't use pesticide or<br></br>harmful chemicals.</p>
                <p>But please don't eat them</p>
                <button>Shop all favourites</button>
            </div>
            <div className="featured_card_div">
                <FeaturedCard val={0}/>
                <FeaturedCard val={1}/>
                <FeaturedCard val={2}/>
            </div>
        </div>
    )
}
export default FeaturedDiv;