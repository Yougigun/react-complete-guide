import React,{Component} from 'react'
import classes from "./Cockpit.module.css"
class Cockpit extends Component{
    constructor(props){
        super(props)
        this.state={}
    }

    static getDerivedStateFromProps(pros,state){
        console.log("[Cockpit.js] getDerivedStateFromProp")
        return state;
      }


    componentDidMount(){
        console.log('[Cockpit.js] componentDidMount')
      }
      
    shouldComponentUpdate(nextProps,nextState){
        console.log('[Cockpit.js] shouldComponentUpdate')
        // let ifupdate = true
        let ifshowPersoneChange = !(nextProps.showPersons === this.props.showPersons)
        let ifpersonLengthChange = !(nextProps.persons.length === this.props.persons.length)
        return ifshowPersoneChange || ifpersonLengthChange;
      }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('[Cockpit.js] getSnapshotBeforeUpdate')
        return null
      }
    
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("[Cockpit.js] componentDidUpdate")
      }
    render(){    const assignedClasses = [];
        let btnClass = '';
        if (this.props.showPersons){
            btnClass = classes.Red;
        }
        if (this.props.persons.length <= 2) {
          assignedClasses.push(classes.red); // classes = ['red']
        }
        if (this.props.persons.length <= 1) {
          assignedClasses.push(classes.bold); // classes = ['red', 'bold']
        }
    
        return(
        <div className={classes.Cockpit}>        
        <h1>{this.props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button className={btnClass} 
        onClick={this.props.clicked}>
          Toggle Persons
        </button>
        </div>
        );}
}


export default Cockpit