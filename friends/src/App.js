import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './FriendsList';
import FriendForm from './FriendForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
        name: '',
        age: '',
        email: ''
    };
  }

  componentDidMount() {
    axios
        .get('http://localhost:5000/friends')
        .then(response => { 
        this.setState ({friends: response.data});
        })
        .catch(error => { 
            console.log(error);
  });
}

handleSubmit = () => {
  const friend = { name: this.state.name, age: this.state.age, email: this.state.email };
  axios
    .post('http://localhost:5000/friends', friend)
    .then((response) => {
      this.setState({ friends: response.data}); 
    })
    .catch(error => {
      console.log(error);
});
this.setState({ name: '', age: '', email: '' });
};

 handleNameChange = (e) => {
  this.setState({ friend: e.target.value });
};

render() {
  return (	    
    <div className="App">	      
        <FriendList friends={this.state.friends} />
        <FriendForm handleNameChange={this.handleNameChange} handleSubmit={this.handleSubmit} />
    </div>
    );
  }
}
