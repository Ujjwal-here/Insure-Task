import {useEffect,useState} from "react"
import axios from "axios"
import Posts from "./components/Posts";

function App() {
  const [post,setPost] =useState([])

  useEffect(() => {
     const fetch= async()=>{
        const data= await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPost(data.data)
      }
     fetch()
  }, [])
  return (
    <Posts p={post}/>
  );
}

export default App;
