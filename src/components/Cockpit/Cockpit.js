import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = ( props ) => {
    const assignedClasses = []
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red) // assignedClasses = ['red']
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold) // assignedClasses = ['red, bold']
    }

    return (
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
    <button onClick={props.toggle}
            className={btnClass}
    >Toggle Persons
    </button>
        </div>
    );
}

export default cockpit;