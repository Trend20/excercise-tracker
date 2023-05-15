import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './CreateExercise.css';


const CreateExercise = () => {
      const [username, setUsername] = useState('')
      const [description, setDescription] = useState('')
      const [duration, setDuration] = useState(0)
      const [ date, setDate] = useState(new Date())
      const [users, setUsers] = useState([])

  // get users
  useEffect(() =>{
    const getUsers = async() =>{
      await axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
            setUsers(response.data.map(user => user.username));
            setUsername(response.data[0].username);
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
    getUsers();
  },[])

  // submit tasks details
  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date
    }
    console.log(exercise);
    axios.post('http://localhost:5000/exercises/add', exercise)
      .then(res => console.log(res.data));
      setUsername('');
      setDescription('')
      setDuration(0);
      setDate(new Date())
    window.location = '/tasks';
  }
    return (
    <div className='exercise'>
      <form onSubmit={onSubmit}>
      <h3>Create New Exercise Here</h3>
        <div className="form-group"> 
          <label>Assignee: </label>
          <select
              required
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}>
              {
                users.map((user) => {
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required 
              id="description" cols="10" 
              rows="3"></textarea>
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input 
              type="number" 
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>Due Date: </label>
          <div className='picker'>
            <DatePicker
              wrapperClassName="date-picker"
              selected={date}
              onChange={(e) => setDate(e.target.value)}
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

export default CreateExercise;