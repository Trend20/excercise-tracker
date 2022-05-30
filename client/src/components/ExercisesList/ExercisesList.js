import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './ExercisesList.css'

const Exercise = props => (
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
      <Link to={"/edit/"+props.exercise._id} id="edit">edit</Link><a href="#" onClick={() => { props.deleteExercise(props.exercise._id) }} id="delete">delete</a>
    </div>
  </div>
)




export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {
      exercises: [],
      loading: true
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        this.setState({ 
          exercises: response.data,
          loading: false
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('http://localhost:5000/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (
      <div className='list'>
        <h3>Assigned Exercises</h3>
        <div className="exercises">
          <div className='tbody'>
            { this.exerciseList() }
          </div>
        </div>
        <Pagination count={8} defaultPage={6} shape="rounded" />
      </div>
    )
  }
}