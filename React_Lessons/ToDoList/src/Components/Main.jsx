import React from 'react'
import './CompCss/maincss.css';
import { AiOutlineClose } from 'react-icons/ai';

function Main(props) {
  
  return (
    <div className='main'>
        <div className="mid">

           <h2>{props.name}  <button id='delet' onClick={props.delete}><AiOutlineClose/></button></h2>
           
        </div>
      
    </div>
  )
}

export default Main
