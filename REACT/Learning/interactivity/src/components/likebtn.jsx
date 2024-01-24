import { useState } from "react";
import "./likebtn.css"

function LikeBtn(){

    const[isliked,setIsliked]=useState(false);

    let clickhandler=()=>{
        setIsliked(!isliked);
    };  

    let likedStyle = {color:'red'};

    return (
        <div>
           <p onClick={clickhandler}>
            {
                isliked?(<i class="fa-solid fa-heart" style={likedStyle} ></i> )
                   
                :( <i class="fa-regular fa-heart" ></i>)
    
               
            }
          </p>
        </div>
    )
}

export default LikeBtn;