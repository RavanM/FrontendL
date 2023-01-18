import './App.css';
import React from 'react';
import { useState } from "react";

function App() {
  /*
  function send1() {
    const word1 = document.getElementById("inp").value;
    const par = document.getElementById("parag");
    par.innerHTML = word1;
    if (word1.length <= 5) {
      const long = document.getElementById("long");
      long.innerHTML = "very short:" +word1.length
    }    
    else{
      const long = document.getElementById("long");
      long.innerHTML = " very long:" +word1.length
    }

    //app daxildir

      <input type="text" id='inp'></input>
      <button type="submit" id="btn" onClick={send1}>submit</button>
      <p id="parag"></p>
      <p id="long"></p>


  }*/
  const [count, setCount ] = useState(null);
  const [not, setNot ] = useState(null);
  const [msg, setMsg ] = useState(null);



  return (
    <div className="App">
      <input type="text" id='inp'></input>
      <button type='submit'onClick={() => {
        setCount(document.getElementById("inp").value.length)
        setNot(document.getElementById("inp").value)
        if (document.getElementById("inp").value.length <= 5) {
          setMsg("short")          
        }
        else{ 
          setMsg("long")         
        }
        if(document.getElementById("inp").value.length == 0){
          setMsg("none")         

        }
        
      }}>submit</button>
      <h4>Length : {count}</h4>
      <h4>Note : {not}</h4>
      <h4>Message : {msg}</h4>

    

      
    </div>
  );
}

export default App;
