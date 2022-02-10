import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <div>
            <nav className={'navbar'}>
                <div className={'navbar__logo'}>
                    Wild Best
                </div>
                <div className={'navbar__button'}>
                    <button className={'navbar__link'}>
                        Telegram канал
                    </button>
                    <button className={'navbar__link'}>
                        Поддержка
                    </button>
                </div>
                <div className={'navbar__button'}>
                    <button className={'navbar__auth button navbar_login'}>
                        Вход
                    </button>
                    <button className={'navbar__auth button navbar_register'}>
                        Регистрация
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;