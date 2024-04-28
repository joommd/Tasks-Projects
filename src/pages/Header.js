import React from 'react'
import "./Header.css"
import Main from './Main'
import { Link } from 'react-router-dom'


export default function Header() {

  let getUser = localStorage.getItem("username");

const clear = () =>{

  localStorage.clear();
  setTimeout(()=>{
    window.location ="log";
} , 1500)
}


  return (
    <div className='header-content'>
    <header>
       <img src='joo.png' alt='logo' />
         <h1>TASKS</h1>
         <div className='info'>
          <button className='btn btn-warning' onClick={clear}><Link className='link' to="/log">Log Out</Link></button>
          <span> Hello {getUser}</span>
         </div>
    </header>

        <div className='line'></div>

        <div>
        <Main />
        </div>
        </div>
  ) 
}
