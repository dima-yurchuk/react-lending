import React from 'react';
import './KeyPointsItem.scss'

const KeyPointsItem = ({title, text, marginTop, height}) => {
    return (
        <div className={'key-points-item'} style={{marginTop:marginTop}}>
            <img src={'/images/keyPoints/check.png'}/>
            <div className={'key-points-item__text'} style={{height:height}}>
                <div className={'key-points-item__text-title'}>
                    {title}
                </div>
                <div className={'key-points-item__text-content'} dangerouslySetInnerHTML={{ __html: text }}>

                </div>
            </div>
        </div>
    );
};

export default KeyPointsItem;