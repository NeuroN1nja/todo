import React from 'react';
import TaskList from './TaskList'

function List(props){
        return (   
            <div className='container '>
            <ul className="list-group ">
                {props.tasks.map((task) => 
                <TaskList 
                    title={task.text}
                    id={task.id}
                    key={task.id}
                    deleteCard={props.deleteCard}
                />)}
            </ul>
            </div>
        );
    
}

export default List;