import React from 'react';

const style = {
    'width': '30%', 'margin': '16px auto'
};

const userInput = (props) => {
    return (
        <div style={style}>
            <input type='text' onChange={props.changed} value={props.initialValue}></input>
        </div>
    )
};

export default userInput;