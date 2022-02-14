import React from 'react';
import './Navbar.scss'
import {Link} from "react-router-dom";
import Button from "../UI/Button/Button";

const Navbar = () => {
    return (
        <div>
            <nav className={'navbar'}>
                <div className={'navbar__logo'}>
                    Wild Best
                </div>
                <div className={'navbar__button'}>
                    <Link to={'/telegram'}>
                        <button className={'navbar__link'}>
                            Telegram канал
                        </button>
                    </Link>
                    <Link to={'/support'}>
                        <button className={'navbar__link'}>
                            Поддержка
                        </button>
                    </Link>
                </div>
                <div className={'navbar__button'}>
                    <button className={'navbar__auth button navbar_login'}>
                        Вход
                    </button>
                    <Button text={'Регистрация'} width={143}/>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;