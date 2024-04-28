import React, { useEffect, useReducer, useRef, useState } from 'react'
import "./Main.css"


export default function Main() {

    const UpdateTasks = (tasks , action) => {
      switch(action.type){
        case "ADD_TASK":
          return [...tasks , action.value]

          case "REMOVE_TASK":
            return tasks.filter((ele)=> ele !== action.value)

            case "UPDATE_COMPLETE":
              return tasks.map((ele)=> ele===action.value? {...ele, completed: !ele.completed} : ele)

          default:
            break;
      }
      return tasks

    }
    function getLocalStorage () {
      return localStorage.getItem("tasks") != undefined?
       JSON.parse(localStorage.getItem("tasks")):[];
    }
    const [tasks , setTasks] = useReducer(UpdateTasks , getLocalStorage ());
    useEffect(()=>{
     localStorage.setItem("tasks" , JSON.stringify(tasks))
   },[tasks])

    const newTask = useRef();

    
    const addTask =() => {

      const newTask1= newTask.current.value;

      if (newTask1 != ""){
        setTasks({
            type:"ADD_TASK" ,
            value:{task: newTask1,
            completed:false
          }})

        }
        
        
      }


  return (
    <main className='container'>

    <table className='table'>
        <tbody>
          {tasks.map((ele)=>{
            return  <tr key={ele.task}>
                <td style={{textDecoration: ele.completed? "line-through":"none"}}><h3>{ele.task}</h3></td>

                <td><button className='complete btn btn-info' onClick={()=>{ setTasks({
                  type:"UPDATE_COMPLETE" ,
                  value:ele
                })}}>{ele.completed? "Complete" :"UnComplete"}</button></td>

                <td><button className='remove btn btn-danger' onClick={()=>{ setTasks({
                 type:"REMOVE_TASK" ,
                 value: ele
      })}}>X</button></td>
            </tr>
          })}
       
            </tbody>
            </table> 

          <div>
            <input className='form-control' type='text' ref={newTask}/>
            <button id='add' className='btn btn-success w-50' onClick={addTask}> + </button>
            </div>
            </main>
        )
    }
    
    // <p>{ele.task}</p>
    // <p className='complete'>{ele.completed? "Complete" : "unComplete"}</p>
    // <button>X</button>}    