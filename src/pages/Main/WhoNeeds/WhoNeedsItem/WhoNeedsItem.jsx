import React from 'react';
import './WhoNeedsItem.scss'

const WhoNeedsItem = ({image, title, text}) => {
    return (
        <div className={'who-needs-item'}>
            <img src={`/images/whoNeeds/${image}`}/>
            <div className={'who-needs-item__title'}>
                {title}
            </div>
            <div className={'who-needs-item__text'}>
                {text}
            </div>
        </div>
    );
};

export default WhoNeedsItem;