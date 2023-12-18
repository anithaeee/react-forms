import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const[name,setname]= useState('');
  return (
    <>
     <form>
       <label>enter your name:
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}hange></input>
       </label>
     </form>
    </>
  );
}

export default App;
