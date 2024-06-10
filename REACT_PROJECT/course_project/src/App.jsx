import Navbar from "./components/Navbar.jsx";
import Filter from "./components/Filter.jsx";
import Cards from "./components/Cards.jsx";
import Loading from "./components/Loading.jsx";
import { filterdata, apiurl } from "./data.js";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";       
import "./App.css";

function App() {
  const [filterData, setFilterData] = useState(filterdata);
  const [courses,setCourses]=useState(null);
  const [loading,setLoading]=useState(true);

  useEffect(
    ()=>{
      setLoading(true);
      const fetchdata= async()=>{
        try{

          const res=await fetch(apiurl);
          const output= await res.json();
          console.log(output.data);
          setCourses(output.data);

        }catch(error){
          console.error("Error fetching data: ", error);

          alert("something went wrong");
        }
      }
      setLoading(false);

      fetchdata();
    },[]
  );

  return (
    <div>
      <Navbar />

      <Filter filterData={filterData} />

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading?(<Loading/>):(<Cards courses={courses}/>)
        }
      </div>
      
    </div>
  );
}

export default App;
