import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
function App() {
  const[value,setvalue] = useState("");
  const[name,setname]= useState('');

   const handleSubmit = (val)=>{
      setvalue(val);
      alert("form got submitted" +value)
   }
  return (
    <>
     <form  onSubmit={()=>{handleSubmit(name)}}> 
       <label>enter your name:
        <textarea type="text" value={name} onChange={(e)=>{setname(e.target.value)}}hange></textarea>
       </label>
       <input type='submit' value="Submit"></input>
     </form>
    </>
  );
}

export default App;
