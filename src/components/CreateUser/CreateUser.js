import React, { Component } from 'react';
import axios from 'axios';
import './CreateUser.css';

class CreateUser extends Component {

  constructor(props){
    super(props)
    this.state ={
      username: ''
    }
  }

  onChangeUsername = (event) =>{
    this.setState({
      username: event.target.value
    })
  }

  onSubmitUser = (event) =>{

    event.preventDefault();

    const newUser = {
      username: this.state.username
    }

    console.log(newUser);

    // add users to the database
    axios.post('http://localhost:5000/users/add', newUser)
          .then(res => console.log(res.data));

    this.setState({
      username: ''
    })
  }
  render() {
    return (
      <div className='user'>
        <form onSubmit={this.onSubmitUser}>
        <h3>Create New User</h3>
            <div className="form-group"> 
              <label>Username </label>
              <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
             <input type="submit" value="Add New User" className="form-btn" />
            </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;