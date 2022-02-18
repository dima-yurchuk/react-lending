import React from 'react';
import './Footer.scss'

const Footer = () => {
    return (
        <div className={'footer'}>
            <div className={'footer__text'}>
                Контакты&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Политика конфиденциальности&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Публичная оферта<br/>
                © 2021 WildBest
            </div>
        </div>
    );
};

export default Footer;