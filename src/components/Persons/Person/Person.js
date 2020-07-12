import React, { Component } from 'react';
import withClass from "../../../hoc/withClass";
import classes from './Person.module.css';
import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElmentRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    console.log("[Person.js] componentDidMount")
    // this.inputElment.focus()
    this.inputElmentRef.current.focus();
    //this.context is given by react automatically
    console.log(this.context.authenticated)
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
      </p>
        <p key="i2" >{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl)=>{this.inputElment = inputEl}}
          ref={this.inputElmentRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func

};
export default withClass(Person, classes.Person);
