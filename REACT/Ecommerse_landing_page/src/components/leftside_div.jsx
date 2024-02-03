import "./leftside_div.css";

function Leftside() {
  let clickhandler = () => {
    console.log("hi");
  };

  let DoubleClickhandler = () => {
    alert("bhai ek bar hi press karna hai ");
  };
  return (
    <div className="leftside_div">
      <div className="heading_div">
        <h2>Find perfect plants</h2>
        <h2>for your home</h2>
      </div>
      <p>
        Beautiful plants that<br></br> encourage you to get creative
      </p>
      <button onClick={clickhandler} onDoubleClick={DoubleClickhandler}>
        SHOP NOW
      </button>
    </div>
  );
}

export default Leftside;
