import React from 'react'
const API_KEY = "OH8i4KyQ9VJKMiNJrMMXm8Xd9BI7SE7d";
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&&tag=${tag}`;



const Gif = () => {
    const [gif, setGif] = useState("");
    const [loading,setLoading]=useState(false)
    const[command,setCommand]=useState("");
    const[tag,setTag]=useState("car")
  
  
    // REACT_APP_GIPHY_API_KEY='OH8i4KyQ9VJKMiNJrMMXm8Xd9BI7SE7d'
  
    async function fetchData() {
      setLoading(true);
      console.log(API_KEY);
      // const url=`const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  
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
  
  
    
}

export default Gif