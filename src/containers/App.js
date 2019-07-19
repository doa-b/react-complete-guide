import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxillairy'
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context'

class App extends Component {

    constructor(props) {
        super(props);
        console.log ('[App.js] constructor');
        this.state = {
                persons: [
                    {id: 'p1', name: 'Max', age: 28},
                    {id: 'p2', name: 'Manu', age: 29},
                    {id: 'p3', name: 'Stephanie', age: 26}
                ],
                otherState: 'some other value',
                showPersons: false,
                showCockpit: true,
                changeCounter: 0,
                authenticated: false
        };
    }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[App.js] getDirivedStateFromProps', props);
    //     return state; // normally you return updated state
    // }
    //
    // componentDidMount () {
    //     console.log('[App.js] Component did mount');
    // }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[App.js] shouldComponentUpdate');
    //     return true; // normally you put some conditional statements here to
    //     // check if the props changed
    // }
    // componentDidUpdate (prevProps, prevState, snapshot){
    //     console.log('[App.js] componentDidUpdate' ,snapshot);
    // }

    // state = {
    //     persons: [
    //         {id: 'p1', name: 'Max', age: 28},
    //         {id: 'p2', name: 'Manu', age: 29},
    //         {id: 'p3', name: 'Stephanie', age: 26}
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});

        // this.setState({changeCounter: this.state.changeCounter + 1});

        this.setState((prevState, props) => {
            return {changeCounter: prevState.changeCounter + 1};
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    deletePersonHandler = (personIndex) => {
        const updatedPersons = [...this.state.persons];
        updatedPersons.splice(personIndex, 1);
        this.setState({persons: updatedPersons})
    }

    loginHandler =() => {
        this.setState({authenticated: true})
}

    render() {
        console.log('[App.js] render')

        let persons = null;

        if ( this.state.showPersons ) {
            persons = <Persons
                persons={this.state.persons }
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}
            />;
        }

        return (
            <Aux>
                <button onClick={() => {this.setState({ showCockpit: false })}}>Remove Cockpit</button>
                <AuthContext.Provider value={
                    {
                        authenticated: this.state.authenticated ,
                        login: this.loginHandler}
                } >
                {(this.state.showCockpit) ? (
                    <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                toggle={this.togglePersonsHandler}
                />) : null}
                {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default withClass(App, classes.App);


