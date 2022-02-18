import React from 'react';
import './WhoNeeds.scss'
import Title from "../Title/Title";
import TextBlock from "../TextBlock/TextBlock";
import WhoNeedsItem from "./WhoNeedsItem/WhoNeedsItem";

const WhoNeeds = () => {
    return (
        <div className={'who-needs'}>
            <Title text={'Кому необходим WILD BEST?'}/>
            <TextBlock text={'Сферы применения нашего сервиса буквально безграничны'}/>
            <div className={'who-needs__content'}>
                <WhoNeedsItem image={'schoolchild.png'} title={'Новичкам'} text={'Поставщикам, которые давно продают' +
                    ' и хотят увеличить прибыль и оптимизировать бизнес.'}/>
                <WhoNeedsItem image={'couple.png'} title={'Старичкам'} text={'Поставщикам которые только выходят на ' +
                    'маркетплейсы и хотят сделать хороший старт.'}/>
                <WhoNeedsItem image={'manager.png'} title={'Менеджерам'} text={'Менеджерам по маркетплейсам, чтобы' +
                    ' выполнить необходимые KPI и получить премию.'}/>
            </div>
        </div>
    );
};

export default WhoNeeds;