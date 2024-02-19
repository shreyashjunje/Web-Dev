import Data from "./data.jsx";
import { useState } from "react";
import Tours from "./components/Tours.jsx";

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div>
        <h2>No tours left</h2>
        <button onClick={()=>{setTours(Data)}}>Refresh</button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}

export default App;
