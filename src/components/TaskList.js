import React, { Component } from 'react';

function TaskList(props) {
    
    const deleteCard = () => {
        props.deleteCard(props.id);
    }

    return (

            <li className="list-group-item">
                    <p className="card-text">{props.title}</p>
                    <a onClick={deleteCard} className="btn btn-outline-dark">Delete</a>
            </li> 

        
    );
    
}

export default TaskList;