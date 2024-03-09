import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiurl, filterdata } from "./data.js/";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchdata() {
    setLoading(true);

    try {
      let response = await fetch(apiurl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("error");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Filter filterdata={filterdata} />
      </div>
      <div className="flex justify-center items-center ">
        {loading ? <Spinner /> : <Cards courses={courses} />}
      </div>
    </div>
  );
}

export default App;
