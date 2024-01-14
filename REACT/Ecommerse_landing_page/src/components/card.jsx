import "./card.css"
import Jungle from "./images/jungle.jpeg"
import Outdoor from "./images/outdoor.jpg"
import Bedroom from "./images/bedroom.jpeg"
import Indoor from "./images/indoor.jpg"

function Card({idx}){
    let name=["Jungle plants","Outdoor plants","Bedroom plants","Indoor plants"];
    let img=[Jungle,Outdoor,Bedroom,Indoor];
    return(
        <div className="card_div">
            <div>
            <img src={img[idx]} alt="" />
            <h2>{name[idx]}</h2>
            </div>
           
          
        </div>
    )
}

export default Card;