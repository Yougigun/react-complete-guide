import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons'
import Cockpit from "../components/Cockpit/Cockpit"
class App extends Component {
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
  }

  };

  static getDerivedStateFromProps(props,state){
    console.log("[App.js] get getDerivedStateFromProps",props,state)
    // state = {showPersons:false}
    return state; // this method return an object to update state
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[App.js] shouldComponentUpdate')
    console.log("prev",this.state.showPersons)
    console.log("next",nextState.showPersons)
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[App.js] getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate(prevProps,prevState,snapshot){
    console.log("[App.js] componentDidUpdate")
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });

  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log("[App.js] render")
    let persons = null;
    

    if (this.state.showPersons) {
      persons = <Persons 
          persons = {this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
            
    }

    return (
      <div className={classes.App}>
        <Cockpit
        title = {this.props.appTitle}
        showPersons ={this.state.showPersons}
        persons = {this.state.persons}
        clicked = {this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
