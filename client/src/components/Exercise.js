import React from 'react'
import { Link } from 'react-router-dom';

const Exercise = ({task, deleteTask}) => {
  return (
    <div className='details'>
    <div className='items'>
      <h3>Assignee:</h3>
      <p>{task.username}</p>
    </div>
    <div className='items'>
     <h3>Description:</h3>
     <p>{task.description}</p>
    </div>
    <div className='items'>
      <h3>Duration:</h3>
      <p>{task.duration}</p>
    </div>
    <div className='items'>
      <h3>Due Date:</h3>
      <p>{task.date.substring(0,10)}</p>
    </div>
    <div className='items'>
      <Link to={"/edit/"+task._id} id="edit">edit</Link><a href="#" onClick={() => {deleteTask(task._id) }} id="delete">delete</a>
    </div>
  </div>
  )
}

export default Exercise;