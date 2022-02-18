import React from 'react';
import './Tariffs.scss'
import Button from "../../../../components/Button/Button";

const Tariffs = ({title, price, offer}) => {
    return (
        <div className={'tariffs'}>
            <div className={'tariffs__title'}>
                {title}
            </div>
            <div className={'tariffs__text'}>
                При использовании пакетных предложений
            </div>
            <div className={'tariffs__price'}>
                {price}
            </div>
            <div className={'tariffs__offer'}>
                {offer}
            </div>
            <div style={{marginTop:24}}>
                <Button text={'Попробовать'} width={274}/>
            </div>
        </div>
    );
};

export default Tariffs;