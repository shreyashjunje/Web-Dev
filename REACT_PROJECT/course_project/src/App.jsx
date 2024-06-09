import Navbar from "./components/Navbar.jsx";
import Filter from "./components/Filter.jsx";
import Cards from "./components/Cards.jsx";
import { filterdata, apiurl } from "./data";
import { useState } from "react";
import "./App.css";

function App() {
  const [filterData, setFilterData] = useState(filterdata);
  return (
    <div>
      <Navbar />

      <Filter filterData={filterData} />

      <Cards />
    </div>
  );
}

export default App;
