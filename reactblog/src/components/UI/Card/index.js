import React from 'react';
import './style.css';

const Card = (props) => {
    return (
        //...props being used to pass the style properties. style={props.style} also work
        <div className='card' {...props}> 
            {props.children}
        </div>
    )
}
export default Card;