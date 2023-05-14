import React from 'react'
import { Link } from 'react-router-dom';

const Exercise = (props) => {
  return (
    <div className='details'>
    <div className='items'>
      <h3>Assignee:</h3>
      <p>{props.exercise.username}</p>
    </div>
    <div className='items'>
     <h3>Description:</h3>
     <p>{props.exercise.description}</p>
    </div>
    <div className='items'>
      <h3>Duration:</h3>
      <p>{props.exercise.duration}</p>
    </div>
    <div className='items'>
      <h3>Due Date:</h3>
      <p>{props.exercise.date.substring(0,10)}</p>
    </div>
    <div className='items'>
      <Link to={"/edit/"+props.exercise._id} id="edit">edit</Link><a href="#" onClick={() => {props.deleteExercise(props.exercise._id) }} id="delete">delete</a>
    </div>
  </div>
  )
}

export default Exercise;