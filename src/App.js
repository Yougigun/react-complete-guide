import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    otherState: "some other value"
  });

  const [otherState, setOtherState] = useState("Some other values")

  console.log(personsState, otherState)

  const switchNameHandler = () => {
    // console.log("Was clicked!");
    // DON'T DO THIS: this.state.persons[0].name = "Maximilian"
    setPersonsState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 27 }
      ]
    })
  }
  // DON'T USE THIS WAY TO CREATE METHOD
  // switchNameHandler() {
  //   // console.log("Was clicked!");
  //   // DON'T DO THIS: this.state.persons[0].name = "Maximilian"
  //   this.setState({
  //     persons: [
  //       { name: "Maximilian", age: 28 },
  //       { name: "Manu", age: 29 },
  //       { name: "Stephanie", age: 27 }
  //     ]
  //   })
  // }



  return (
    <div className="App" onKeyUp={(e) => { console.log("asd") }}>
      <h1 >HI, I am a React App</h1>
      <p>That's really working.</p>
      {/* <button onClick={()=>{this.switchNameHandler()}}>Switch Name</button> */}
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
    // React.createElement("div",{className:"App"},
    // React.createElement("h1",null,"Does it works?")
    // )
  )
}


export default app;

// tabIndex="0" 

