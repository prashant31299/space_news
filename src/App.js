// import logo from './logo.svg';
import  { useEffect,useState} from "react";

import './App.css';
import Apicall from './components/Apicall';
import Menu from "./components/Menu";
function App() {
  const [state,setstate] =useState([])

  useEffect(()=>{
    fetch('https://api.spaceflightnewsapi.net/v3/articles')
    .then((res)=>res.json())
    .then((data)=>{
      setstate(data)
    }).catch((err)=>{
      console.log(err," bhosdika fir se error aa gya");
    })
  },[])

console.log(state)

  

  return (
    <div className="App">
  <div className="title">
    <h2>Space News</h2>
  </div>
     
{state.map((val,key)=>{
  return (
    <Apicall 
    id={key} 
    title={val.title}
    image={val.imageUrl}
    publish={val.publishedAt}
    summery={val.summary}
    url={val.url}

    
    />
  )
})
}  
<Apicall/>
<Menu name={"prashant"}/>
  </div>
  );
}

export default App;
