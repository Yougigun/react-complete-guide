import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value'
  };

  deletePersonHandler = (personIndex) => {
    // Because of reference type, its may change original data. 
    // So using slice to copy it.
    // const persons = this.state.persons.slice(); 
    // Alternative - ES6 feature - spread operator ' ... '
    const persons = [...this.state.persons]; 
    persons.splice(personIndex,1)
    this.setState({persons:persons})

  };


  // switchNameHandler(newName)  {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   });
  // };
  // nameChangeHandler = (event)=>{
  //   this.setState({
  //     persons: [
  //       { name: event.target.value, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   })
  // }

  // Closure for customizer different function
  nameChangeHandler = (order)=>{
    return ((event)=>{
      // Copy the value from state
      let newState={...this.state}
      //  Change the values in new variable
      newState.persons[order].name = event.target.value
      // Set state
      this.setState(newState)
    })
  } 

  togglePeronsHandler = ()=>{ 
     let state = {showPersons:!this.state.showPersons}
     this.setState(state)
  }

  ifShowPerons = () => {
    let persons =null ;
    if (this.state.showPersons === true){
      persons=(
        <div >
          {this.state.persons.map((person,index) =>{
            return <Person 
              click = {()=>this.deletePersonHandler(index)}
              name={person.name}
              age = {person.age} />
          })}
      </div>
      );
    };
    return persons
  }

  render() {
    console.log("I am here")
    const style = {
      backgroundColor:"white",
      font:"inferit",
      border:"1px solid blue",
      padding:"8px",
      cursor:"pointer"
    };

    let persons = this.ifShowPerons() ;

    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePeronsHandler}>Toggle Persons</button>
        {
          persons
        }

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
