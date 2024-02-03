import "./rightside_div.css"
import plant from "./plant.jpg";

let mouseoverhandler=()=>{
    console.log("this is image");
}

function Rightside(){

    return(
        <div className="rightside_div">
            <img onMouseOver={mouseoverhandler} src={plant} alt="" />
        </div>
    )
}

export default Rightside;