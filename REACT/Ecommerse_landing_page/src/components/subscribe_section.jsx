import "./subscribe_Section.css"


function SubscribeSection(){
    return(
        <div className="subscribe_main_div">
            <div className="heading_section">
                <h2>Get 15% off your next order,</h2>
                <h2>Subscribe to our NewSletter</h2>
            </div>
            <div className="input_section">
                <input type="text" placeholder="Enter your email here"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default SubscribeSection;