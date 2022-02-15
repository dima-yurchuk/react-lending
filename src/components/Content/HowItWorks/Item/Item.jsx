import React from 'react';
import './Item.scss'

const Item = ({marginTop, height, align, image, heightTextBlock, text}) => {
    let marginTopLocal = 0
    if(marginTop){
        marginTopLocal = marginTop
    }
    return (
        <div align={align} className={'how-it-works-item'} style={{marginTop:marginTop, height:height}}>
            <div  className={'how-it-works-item__content'}>
                <img src={`/images/howItWorksItems/${image}`} />
                <div className={'how-it-works-item__text'} style={{height:heightTextBlock}}
                     dangerouslySetInnerHTML={{ __html: text }}>

                </div>
            </div>
        </div>
    );
};

export default Item;