import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CreateUser.css';

const CreateUser = () =>{
  const [username, setUsername]= useState('')
  const [alert, setAlert]= useState('')

  // handle on input change
  const onChangeUsername = (event) =>{
   setUsername(event.target.value)
  }

  // submit user details
  const onSubmitUser = async (event) =>{
    event.preventDefault();
    const newUser = {
      username: this.state.username
    }
    console.log(newUser);
    // add users to the database
    await axios.post('http://localhost:5000/users/add', newUser)
          .then(res => console.log(res.data));
    setUsername('')
    setAlert("User added successfully!");
    setTimeout(() =>{
      setAlert('')
    }, 2000)
  }
    return (
      <div className='user'>
        <form onSubmit={onSubmitUser}>
        <h3>Create New User</h3>
            <div className="form-group"> 
              <label>Username </label>
              <input  type="text"
              required
              className="form-control"
              value={username}
              onChange={onChangeUsername}
              />
              {
               onSubmitUser && <p style={{ color: 'green', marginTop: '10px' }}>{alert}</p>
              }
            </div>
            <div className="form-group">
             <input type="submit" value="Add New User" className="form-btn" />
            </div>
        </form>
      </div>
    );
}

export default CreateUser;