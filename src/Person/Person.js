import React from 'react';
// import "./Person.css";
// import Radium from "radium";
import style from 'styled-components';
import styled from 'styled-components';
const StyledDiv = styled.div`
                        width:90%;
                        padding: 16px;
                        border: 1px solid #eeee;
                        margin: 16px auto;
                        box-shadow:0px 2px 3px #eeee;
                        text-align: center;
                        :hover{
                            background-color: lightblue;
                        }
                        @media (min-width: 500px ) {
                            width: 450px;
                        }`;
const person = ( props ) => {

    return (
        // <div className="Person" style = {style}>
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            {/* Set onChange to set new state and value to show from start */}
            <input type="text" 
            onChange={props.changed} 
            value={props.name} 
            />
        </StyledDiv>
        // </div>
    )
};

export default person;