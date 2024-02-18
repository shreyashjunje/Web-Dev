import Data from ",/data.jsx";
import { useState } from "react";

function App(){

  const [tours,setTours]=useState(Data);

  return (
    <div>
      <Tours tours={tours}/>
    </div>
  )
}


export default App;