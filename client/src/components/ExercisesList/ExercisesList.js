import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';
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
      loading: true,
      offset: 0,
      perPage: 8,
      currentPage: 0,
      pageCount: 0
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        // const exercises = response.data;
        this.setState({ 
          exercises: response.data,
          loading: false,
          pageCount: Math.ceil(this.state.exercises.length / this.state.perPage)
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
    const slice = this.state.exercises.slice(this.state.offset, this.state.offset + this.state.perPage)
    return slice.map(currentexercise => {
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
        <Pagination count={8} shape="rounded" />
      </div>
    )
  }
}