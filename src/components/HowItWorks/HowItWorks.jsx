import React from 'react';
import './HowItWorks.scss'
import Title from "../Title/Title";
import HowItWorksItem from "./HowItWorksItem/HowItWorksItem";
import StepsLine from "./StepsLine/StepsLine";

const HowItWorks = () => {
    let texts = {
        text1 : 'Wildberries ранжирует товары в поисковой выдаче исходя из продаж за последние 14 дней.' +
            ' <b>Чем больше продаж вы делает, тем выше вы находитесь.</b>',
        text2: 'Например, вы продаете носки и хотите стать ТОП-5 по запросу "носки". Но ваши конкуренты делают ' +
            'больше продаж чем вы, поэтому вы находитесь ниже их.',
        text3: 'Вы смотрите продажи артикула конкурента за последние 14 дней: например продано на 140.000 руб. ' +
            '<b>Значит среднее значение дневных продаж 10.000 руб.</b>',
        text4 : 'В течении следующих 14 дней вы ежедневно делаете выкупы на 11.000 руб. (больше чем у конкурента) ' +
            'с помощью нашего сервиса WILD BEST.',
        text5: 'Через 14 дней вы занимаете планируемое место в ТОПе и начинаете получать органические продажи.'
    }
    return (
        <div className={'how-it-works'}>
            <Title text={'Как это работает?'}/>
            <div className={'how-it-works__content'}>
                <HowItWorksItem height={207} marginTop={null} align={'left'} image={'website.png'} heightTextBlock={63}
                                text={texts.text1}/>
                <HowItWorksItem height={207} marginTop={26} align={'right'} image={'settings.png'} heightTextBlock={63}
                                text={texts.text2}/>
                <HowItWorksItem height={207} marginTop={16} align={'left'} image={'rating.png'} heightTextBlock={63}
                                text={texts.text3}/>
                <HowItWorksItem height={207} marginTop={16} align={'right'} image={'startup.png'} heightTextBlock={63}
                                text={texts.text4}/>
                <HowItWorksItem height={186} marginTop={16} align={'left'} image={'report.png'} heightTextBlock={42}
                                text={texts.text5}/>
                <StepsLine/>
            </div>
        </div>
    );
};

export default HowItWorks;