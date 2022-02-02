import React, { Component } from 'react';

class ExercisesList extends Component {
  constructor(props){
    super(props)
    this.state ={
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }
  render() {
    return (
      <div>
        This is the exercise list component
      </div>
    );
  }
}

export default ExercisesList;