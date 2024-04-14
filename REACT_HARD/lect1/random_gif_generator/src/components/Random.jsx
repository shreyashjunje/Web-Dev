import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Spinner from "./Spinner";

// const API_KEY = import.meta.env.random_gif_generator;

const API_KEY = "OH8i4KyQ9VJKMiNJrMMXm8Xd9BI7SE7d";
const Random = () => {
  const [gif, setGif] = useState("");
  const [loading,setLoading]=useState(false)


  // REACT_APP_GIPHY_API_KEY='OH8i4KyQ9VJKMiNJrMMXm8Xd9BI7SE7d'

  async function fetchData() {
    setLoading(true);
    console.log(API_KEY);
    // const url=`const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const res = await axios.get(url);
    console.log(res);
    const imageSource=res.data.data.images.downsized.url;
    console.log(imageSource)

    setGif(imageSource)

    setLoading(false)

    // console.log(da)
    // const imageSource=
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickhandler() {
   const GIF=fetchData()
   setGif(GIF);
  }

  return (
    <div className=" w-1/2 h-[450px] bg-green-400 rounded-lg border border-black  flex flex-col items-center gap-y-5 mt-[10px]">
      <h1 className="text-3xl font-bold underline mt-[15px] ">
        
        A Random Gifs
      </h1>
     
    {
        loading ? (<Spinner/>) : ( <img src={gif} alt="" className="w-[400px] h-[300px]"/>)
    }

     
      <button
        onClick={clickhandler}
        className="border bg-yellow-100 border-black py-[3px] px-[200px]"
      >
        Generate gif
      </button>
    </div>
  );
};

export default Random;
