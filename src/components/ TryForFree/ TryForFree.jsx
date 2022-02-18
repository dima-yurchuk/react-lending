import React from 'react';
import './ TryForFree.scss'
import {Link} from "react-router-dom";


const TryForFree = () => {
    return (
        <div className={'try-for-free'} style={{backgroundImage: `url(/images/tryForFree/bg.png)`}}>
                <div className={'try-for-free__text'}>
                    Попробовать бесплатно
                </div>
                <img src='/images/tryForFree/arrow.png' className={'try-for-free__image'}/>
        </div>
    );
};

export default TryForFree;