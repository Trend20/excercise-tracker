import React, { Component } from 'react';
import axios from 'axios';
import './ExercisesList.css'
import Exercise from '../Exercise';
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
      </div>
    )
  }
}