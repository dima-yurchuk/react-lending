import React from 'react';
import './Advantages.scss'
import '../Header/Header.scss'
import TextContainer from "./TextContainer/TextContainer";
import Button from "../Button/Button";

const Advantages = () => {
    const text1 = {
        title: 'Удобно',
        text: 'С помощью нашего сервиса вы сможете делать полностью автоматизированные множественные выкупы, ' +
            'планировать публикацию отзывов, задавать правильные вопросы к товарам и многое другое..'
    }
    const text2 = {
        title: 'Выгодно',
        text: 'Это выгодней чем отдавать товары бесплатно. После выкупа вы забираете товар обратно, переупаковываете и ' +
            'снова отгружаете на Wildberries!'
    }
    const text3 = {
        title: 'Безопасно',
        text: 'Мы обеспечиваем полную безопасность и конфиденциальность процесса. У каждого аккаунта свои уникальные ' +
            'отпечатки, IP адреса, поведенческие факторы и банковские карты для оплаты.'
    }
    return (
        <div className={'container'}>
            <div className={'product-top'}>
                <div className={'product-top__content'}>
                    <div className={'product-top__text'}>
                        <div className={'product-top__title'}>
                            Продвигайте свои товары в ТОП<br/>
                            <span className={'product-top__color'}>за пару кликов мыши</span>
                        </div>
                        <div className={'product-top__subtitle'}>
                            Продаешь крутые товары, но покупатели их не видят потому что они на последних страницах
                            в
                            выдаче? С помощью WILD BEST ты продвинешься в ТОП-20 всего за 14 дней
                        </div>
                    </div>

                    <Button text={'Попробовать бесплатно'} width={274}/>
                </div>

                <img className={'product-top__image'} src='/images/support/Frame_1.png'/>

            </div>

            <div className={'advantages-easy'}>
                <img className={'advantages-easy__image'} src='images/support/Frame_2.png'/>
                <TextContainer text={text1}/>
            </div>
            <div className={'advantages-profitably'}>
                <TextContainer text={text2}/>
                <img className={'advantages-easy__image'} src='images/support/Frame_3.png'/>
            </div>
            <div className={'advantages-safely'}>
                <img className={'advantages-easy__image'} src='images/support/Frame_4.png'/>
                <TextContainer text={text3}/>
            </div>
        </div>
    );
};

export default Advantages;