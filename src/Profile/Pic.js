import React from 'react';
import mypic from "../propic.jpg";

const Pic = props => {
    return (
        <div>
        <img src={mypic} alt='pic' />
        {props.children}    
        </div>
    )
}

export default Pic
