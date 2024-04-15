import {useState}from 'react'
import Background from "./Components/Background/Background";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Explore from './Explore';
import About from './About';
import Contact from './Contact';

const App = () => {
  let heroData =[
    {text1:"Dive into",text2:"what you love"},
    {text1:"Indulge",text2:"your passions"},
    {text1:"Give in to",text2:"your passions"},
  ]
  const [heroCount,setHeroCount]= useState(1)
  const[playStatus,setPlayStatus] = useState(false)
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
     <BrowserRouter>
     <Navbar />
     
     <Routes>
      <Route path="/Home" exact Component={Home} />
      <Route path="/Explore" exact Component={Explore} />
      <Route path="/About" exact Component={About} />
      <Route path="/Contact" exact Component={Contact} />
           
      
      
     </Routes>
     </BrowserRouter>
     <Hero 
     setPlayStatus={setPlayStatus}
     heroData={heroData[heroCount]}
     heroCount={heroCount}
     setHeroCount={setHeroCount}
     playStatus={playStatus}

     />
    
    </div>
    

  
  )
}

export default App
