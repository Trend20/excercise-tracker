import React, { Component } from 'react';

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

    this.setState({
      username: ''
    })
  }
  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
              <label>Username: </label>
              <input  type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
            </div>
            <div className="form-group">
             <input type="submit" value="Create User" className="btn btn-primary" />
            </div>
        </form>
      </div>
    );
  }
}

export default CreateUser;