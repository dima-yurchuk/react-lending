import React from 'react';
import './Button.scss'

const Button = ({text, width}) => {
    let buttonStyles ={
        width: width
    }
    return (
        // <div>
            <button style={buttonStyles} className={'button button__blue'}>
                {text}
            </button>
        // </div>
    );
};

export default Button;