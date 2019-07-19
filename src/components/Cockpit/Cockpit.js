import React, {useRef, useEffect} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        };
    }, []);

    const toggleBtnRef = useRef(null);

    const assignedClasses = []
    let btnClass = '';

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red) // assignedClasses = ['red']
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold) // assignedClasses = ['red, bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button ref={toggleBtnRef}
                    onClick={props.toggle}
                    className={btnClass}

            >Toggle Persons
            </button>
            <AuthContext.Consumer>
                {context => <button onClick={context.login}>
                Log in
            </button>}
            </AuthContext.Consumer>
        </div>
    );
}

export default React.memo(cockpit);