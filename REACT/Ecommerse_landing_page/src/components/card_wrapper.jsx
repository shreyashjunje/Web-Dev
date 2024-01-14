import "./card_wrapper.css"
import Card from "./card.jsx"

function Categories(){
    
    return(
        <div className="main_div">
            <h2 id="categories_heading">Categories</h2>
            <div className="card_div">
                <Card idx={0}/>
                <Card idx={1}/>
                <Card idx={2}/>
                <Card idx={3}/>
            </div>

        </div>
    )
}

export  default Categories;