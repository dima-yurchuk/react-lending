import React from 'react';
import {Link} from "react-router-dom";
import './Telegram.scss'

const Telegram = () => {
    return (
        <div align={'center'} className={'telegram'}>
            <h3>Telegram</h3><br/>
            <Link to={'/'}>
                <button>На головну</button>
            </Link>
        </div>
    );
};

export default Telegram;