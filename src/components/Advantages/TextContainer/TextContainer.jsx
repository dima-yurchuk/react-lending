import React from 'react';
import './TextContainer.scss'

const TextContainer = ({text}) => {
        return (
            <div className={'advantages-easy-text'}>
                <div className={'advantages-easy-text__title'}>
                    {text.title}
                </div>
                <div className={'advantages-easy-text__text'}>
                    {text.text}
                </div>
            </div>
        );
}

export default TextContainer;