import React from 'react';
import './Top.scss'
import '../Navbar/Navbar.scss'
import frame1 from './image/Frame_1.png'

const Top = () => {
    return (
        <div>
            <div className={'container'}>
                <div className={'product-top'}>
                    <div className={'product-top__content'}>
                        <div className={'product-top__text'}>
                            <div className={'product-top__title'}>
                                Продвигайте свои товары в ТОП<br/>
                                <span className={'product-top__color'}>за пару кликов мыши</span>
                            </div>
                            <div className={'product-top__subtitle'}>
                                Продаешь крутые товары, но покупатели их не видят потому что они на последних страницах в
                                выдаче? С помощью WILD BEST ты продвинешься в ТОП-20 всего за 14 дней
                            </div>
                        </div>

                        <button className={'product-top__button'}>
                            Попробовать бесплатно
                        </button>
                    </div>

                    <img className={'product-top__image'} src={frame1}/>
                </div>
            </div>
        </div>
    );
};

export default Top;