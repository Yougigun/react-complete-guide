import React from 'react';
import "./Person.css";
const person = ( props ) => {
    return (
        <div className="Person" >
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* Set onChange to set new state and value to show from start */}
            <input type="text" 
            onChange={props.changed} 
            value={props.name} 
            />
        </div>
    )
};

export default person;