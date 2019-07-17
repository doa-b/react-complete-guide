import React from 'react';
import classes from './Person.module.css'

// A React component is just a function returning some JSX

const person = ( props ) => {

    const rnd = Math.random();

    if (rnd > 0.7) {
        throw new Error('Something went wrong')
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <input type="text" className={classes.TextInput}
                   onChange={props.changed} value={props.name}/>

        </div>
    )
};

export default person;