import React from 'react';
import classes from './Footer.scss'

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'footer__text'}>
                Контакты   |   Политика конфиденциальности   |   Публичная оферта
                © 2021 WildBest
            </div>
        </div>
    );
};

export default Footer;