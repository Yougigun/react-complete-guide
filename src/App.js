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

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ],
      showPersons:false
    });
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
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,"Maximilian" )}
          nameChangeHandler={this.nameChangeHandler(0).bind(this)}

        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          nameChangeHandler={this.nameChangeHandler(1).bind(this)}
          >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.switchNameHandler}
          nameChangeHandler={this.nameChangeHandler(2).bind(this)}
        />
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
