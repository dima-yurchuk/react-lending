import React from 'react';
import './TextBlock.scss'

const TextBlock = ({text}) => {
    return (
        <div className={'text-block'} >
            {text}
        </div>
    );
};

export default TextBlock;