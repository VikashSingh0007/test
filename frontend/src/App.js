import { useEffect } from 'react';
import './App.css';
import './NavBar';
import Navbar from './NavBar';


const Amc=()=>{
  return(
  <h1>hi i am vikash</h1>
  )
}


function App() {
  // useEffect(()=>{
  //   fetchData();
  // },[]);

  // const fetchData=async()=>{
  //   const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");
  //   const json=await data.json();
  //   console.log(json);

  //   };
  return (
   <div className='app'>
    <div>
      <Navbar greet="hii vikash here great have a good day dsfuj"/>
    </div>
    <Amc/>
   </div>
   
    
  );
}

export default App;
