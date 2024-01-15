import "./featuredCard.css"
import plant1 from "./images/plant1.jpg"
import plant2 from "./images/plant2.jpg"
import plant3 from "./images/plant3.jpeg"

function FeaturedCard({val}){
    let cardarr=[plant1,plant2,plant3];

    return(
        <div className="featured_card">
            <img src={cardarr[val]} alt="" />
            <h3>Plant{val+1}</h3>
            <h2>${(val+1)*50}</h2>
        </div>
    )
}

export default FeaturedCard;