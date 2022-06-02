import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './CreateExercise.css';

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: []
    }
  }

  min = 30;
  max = 480;

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername = (e) =>{
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription = (e) =>{
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration = (e) =>{
    const value = Math.max(this.min, Math.min(this.max, Number(e.target.value)));
    this.setState({
      duration: value
    })
  }

  onChangeDate = (date) => {
    this.setState({
      date: date
    })
  }

  onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));

      this.setState({
        username: '',
        description: '',
        duration: 0,
        date: new Date(),
      })

    window.location = '/';
  }

  render() {
    return (
    <div className='exercise'>
      <form onSubmit={this.onSubmit}>
      <h3>Create New Exercise Here</h3>
        <div className="form-group"> 
          <label>Assignee: </label>
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
          <textarea name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              required 
              id="description" cols="10" 
              rows="3"></textarea>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Due Date: </label>
          <div className='picker'>
            <DatePicker
              wrapperClassName="date-picker"
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Exercise Log" className="form-btn" />
        </div>
      </form>
    </div>
    )
  }
}