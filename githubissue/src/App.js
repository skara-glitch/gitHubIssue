import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import Repo from './components/Repo';


function App() {
  const [owner,setOwner] = useState("");
  const [repo,setRepo] = useState("");

  return (
    <div>
  
      <Navbar />     

      <Repo owner = {owner} setOwner = {setOwner} repo= {repo} setRepo = {setRepo}/>
      {(owner && repo)
      ?
      <Home owner = {owner} repo = {repo}/>
      :
      <></>
      }
    </div>
  );
}

export default App;
