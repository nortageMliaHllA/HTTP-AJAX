import React from 'react';


function SingleFriends(props) {
    return (
        <div className="single-friends">
            <h2>ID: {props.id}</h2>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Email: {props.email}</h2>
        </div>
    )
}




export default SingleFriends;