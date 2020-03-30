import React from 'react';

const person = ( props ) => {
    return (
        <div>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* Set onChange to set new state and value to show from start */}
            <input type="text" onChange={props.nameChangeHandler} value={props.name} />
        </div>
    )
};

export default person;