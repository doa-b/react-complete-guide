import React from 'react';
import './Person.css'

// A React component is just a function returning some JSX

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" onChange={props.changed} value={props.name}/>

        </div>
    )
};

export default person;