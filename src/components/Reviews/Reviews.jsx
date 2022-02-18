import React from 'react';
import './Reviews.scss'
import Title from "../Title/Title";
import Tariffs from "./Tarrifs/Tariffs";

const Reviews = () => {
    return (
        <div className={'reviews'}>
            <Title text={'Отзывы наших клиентов'}/>
            <div className={'reviews__items'}>
                <img src={'/images/reviews/navigate_left.png'}/>
                <div className={'reviews__text'}>
                    <img src={'/images/reviews/quote.png'} className={'reviews__image'}/>
                    <div className={'reviews__content'}>
                        <div className={'reviews__name'}>
                            Михаил
                        </div>
                        <div className={'reviews__comment'}>
                            Сервис очень крутой. Позволяет сделать выкуп товара за пару кликов,что очень сокращает
                            время и нервов поиска) Все хорошо и подробно рассказывают ребята в своем видео. Очень
                            быстро отвечают на вопросы,что очень радует) Спасибо вам за такой супер сервис!!!!
                        </div>
                    </div>
                </div>
                <img src={'/images/reviews/navigate_right.png'}/>
            </div>
            <img src={'/images/reviews/pagination.png'} style={{marginTop:24}}/>
            <div style={{marginTop:88}}>
                <Title text={'Тарифы'}/>
            </div>
            <div className={'reviews__tariffs'}>
                <Tariffs title={'Выкупы'} price={'от 25 руб/шт'} offer={'Наши условия одни их самых выгодных ' +
                    'на рынке.'}/>
                <Tariffs title={'Отзывы'} price={'от 35 руб/шт'} offer={'Высокая проходимость отзывов без пометок.'}/>
            </div>
        </div>
    );
};

export default Reviews;