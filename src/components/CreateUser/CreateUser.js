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
        This is the create user component
      </div>
    );
  }
}

export default CreateUser;