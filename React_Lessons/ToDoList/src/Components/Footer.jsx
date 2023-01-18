import React from 'react'
import './CompCss/footercss.css';


import { useState } from 'react'
import Main from './Main'
function Footer() {
    const [task, setTask] = useState([])
    const [input, setInput] = useState({
        name:"",
        id:""
})
const inputHandler = (e) => {
    const value = e.target.value
    setInput({
        name:value,
        id:Date.now()
    })
}
const submitHandler = () => {
    if(input.name !== ""){
        setTask([
        ...task,input
    ])
    }
else{
    alert("Inputu doldurun")
}
    
    setInput({
        name:"",
        id:""
})
}
const deleteTask = (id) => {
    const filterTask = task.filter(
        (e) =>{return e.id !== id}
    )
    setTask(filterTask)
}
  return (
    <div>
        <div className="submit">
            <h1>You have {task.length} Task </h1>
            <hr />
        {
                task.map(
                    (item,index)=>{return <Main 
                        key={index}
                        name={item.name}
                        delete={()=>deleteTask(item.id)}
                    />}
                )            
        }
            <hr />
            <div className="inputarea">
                <input value={input.name} onChange={inputHandler} type="text" placeholder='Send Task'/> 
                <button onClick={submitHandler}>Send</button>
           
            </div>
          
        </div>
      

    </div>
  )
}

export default Footer
