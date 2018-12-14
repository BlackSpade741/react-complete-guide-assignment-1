import React from 'react';
import './UserOutput.css';

const headerStyle = {"lineHeight": "0px", "fontSize":"100px"}
const userOutput = (props) => {
    return (<div className='User'>
        <div>
            <h1 style={headerStyle}>Hello</h1>
            <p>My name is</p>
        </div>
        <div className="UserBottom">
            <p>{props.username}</p>
        </div>
    </div>
    )
};

export default userOutput;