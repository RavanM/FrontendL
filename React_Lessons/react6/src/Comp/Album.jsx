import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Spin } from 'antd';
import './album.css'
function Album() {
    const [ photo, setPhoto ] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
        .then((response)=>{setPhoto(response.data);setLoading(false)})
        .catch(error => alert("Problem..."))

    },[]);

    if(loading){
        return <h2>Loading...<Spin size="large" /></h2>
    }
    
 
    return (
    <div className='photos'>
      {photo.slice(0,30).map((item)=>{
      
       return <div>
        
            <img src={item.url} />
            <h2>{item.title}</h2>
        </div>
      })}
      <div className="but">
         <button>Continue</button>
      </div>
     
    </div>
  );
}

export default Album
