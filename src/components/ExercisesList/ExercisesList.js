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
  componentDidMount() {
    this.setState({ 
      users: ['test user'],
      username: 'test user'
    });
  }

  // username
  onChangeUsername = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  // description
  onChangeDescription = (event) =>{
    this.setState({
      description: event.target.value
    })
  }

  // duration
  onChangeDuration = (event) =>{
    this.setState({
      duration: event.target.value
    })
  }

  // date
  onChangeDate  = (date) =>{
    this.setState({
      date: date
    })
  }


  // form submission
  onSubmit(e){
    // prevent default form behavior
    e.preventDefault();

    // define the exercise
    const exercise = {
       username: this.state.username,
       description: this.state.description,
       duration: this.state.duration,
       date: this.state.date
    }

    console.log(exercise);

    window.location = "/"
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