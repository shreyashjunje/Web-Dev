import "./App.css";
import Random from "./components/Random.jsx";
import Tag from "./components/Tag.jsx";

function App() {
  return (
    <div className=" flex flex-col  background">
    
        <h1 className="bg-white align-middle text-center font-bold rounded-sm p-3 ml-[300px] mr-[300px] m-[50px]">Random Gifs</h1>
     
      <div className="flex flex-col justify-center content-center w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
