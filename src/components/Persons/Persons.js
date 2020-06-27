import React, { Component } from 'react'
import Person from "./Person/Person"

class Persons extends Component {
    constructor(props){
        super(props)
        this.state={}
    }

    static getDerivedStateFromProps(pros,state){
        console.log("[Persons.js] getDerivedStateFromProp")
        return state;
      }


    componentDidMount(){
        console.log('[Persons.js] componentDidMount')
      }
      
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Persons.js] shouldComponentUpdate',nextProps.persons[0].name)
        return true;
      }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Peron.js] getSnapshotBeforeUpdate')
        console.log(prevProps.persons[0].name)
        return {message :"snapshot"}
      }
    
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("[Persons.js] componentDidUpdate")
        console.log(prevProps.persons[0].name)
        console.log(snapshot)
      }



    render(){
        console.log('[Persons.js] rendering...')
        return (<div>
              {this.props.persons.map((person, index) => {
                return (
                  <Person
                    click={() => this.props.clicked(index)}
                    // click={props.clicked}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)}
                  />
                );
              })}
            </div>)
    }

}



export default Persons