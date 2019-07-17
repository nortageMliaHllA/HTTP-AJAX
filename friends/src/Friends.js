import React, { Component } from 'react';
import axios from "axios";
import SingleFriends from './SingleFriends';


export default class Friends extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(response => { 
            this.setState ({friends: response.data});
            })
            .catch(error => { 
                console.error(error);
    });
}
    render() {
        return (
            <div className='friends'>
                {this.state.friends.map(friends => <SingleFriends id={friends.id} name={friends.name} age={friends.age} email={friends.email} />
                )}
            </div>
        );
    }
}

