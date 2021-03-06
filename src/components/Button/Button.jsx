import React from 'react';
import './Button.scss'

const Button = ({text, width}) => {
    let buttonStyles ={
        width: width
    }
    return (
        <button style={buttonStyles} className={'button button__blue'}>
            {text}
        </button>
    );
};

export default Button;