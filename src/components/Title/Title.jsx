import React from 'react';
import './Title.scss'

const Title = ({text}) => {
    return (
        <div className={'text-title'}>
            {text}
        </div>
    );
};

export default Title;