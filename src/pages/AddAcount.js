import React, { useState } from 'react'
import "./Header.css"
import Main from './Main'
import { Link } from 'react-router-dom'


export default function AddAcount() {

  let getUser = localStorage.getItem("username");

const login = () =>{

  setTimeout(()=>{
    window.location ="log";
} , 1500)
}

const [tasks , setTasks] = useState([
    {id:1 , task:"Wake Up" ,completed:true},
    {id:2 , task:"Take a Shower" ,completed:true},
    {id:3 , task:"Take Breakfast" ,completed:false},
    {id:4 , task:"Reading a Book" ,completed:false},
])

  return (
    <div className='header-content'>
    <header>
       <img src='joo.png' alt='logo' />
         <h1>TASKS</h1>
         <div className='info'>
          <button className='btn btn-warning' onClick={login}><Link className='link' to="/log">Add Account</Link></button>
          <span>{getUser}</span>
         </div>
    </header>

        <div className='line'></div>

        <div>
        
        <main className='container'>

             <table className='table'>
                 <tbody>
                   {tasks.map((ele)=>{
                     return  <tr key={ele.task}>
                         <td style={{textDecoration: ele.completed? "line-through":"none"}}><h3>{ele.task}</h3></td>
         
                         <td><button className='complete btn btn-info'>{ele.completed? "Complete" :"UnComplete"}</button></td>
         
                         <td><button className='remove btn btn-danger'>X</button></td>
                     </tr>
                   })}
                
                     </tbody>
                     </table> 
                     </main>
        
        </div>
        </div>
  ) 
}
