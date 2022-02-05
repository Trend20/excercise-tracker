import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

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

    axios.post('http:localhost:5000/exercises/add', exercise)
          .then(res => console.log(res.data));

    window.location = "/"
  }
  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Duration (in minutes): </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.duration}
                onChange={this.onChangeDuration}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default ExercisesList;