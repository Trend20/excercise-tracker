import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ExercisesList.css'
import Exercise from '../Exercise';
const TaskList = () => {

    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);

 useEffect(() =>{
  const getTasks = async () =>{
    await axios.get('http://localhost:5000/exercises/')
        .then(response => {
          console.log('available tasks',response)
          if(response.status === 200){
            setTasks(response.data);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        })
   }
   getTasks();
 },[])

//  delete task
const deleteTask = async (id) =>{
    await axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});
      setTasks(() =>tasks.filter(el => el._id !== id));
  }
    return (
      <div className='list'>
        {
          tasks && tasks.length !== 0 ? 
          <>
            <h3>Tasks</h3>
            <div className="exercises">
              <div className='tbody'>
                {
                  tasks.map(currentTask => {
                  return <Exercise task={currentTask} deleteTask={deleteTask} key={currentTask._id} />
                })}
              </div>
            </div>
            </>: <p>No Tasks Available</p>}
      </div>
    )
}

export default TaskList;