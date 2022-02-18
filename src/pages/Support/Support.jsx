import React from 'react';
import {Link} from "react-router-dom";
import './Support.scss'

const Support = () => {
    return (
        <div align={'center'} className={'support'}>
            <h3>Підтримка</h3><br/>
            <Link to={'/'}>
                <button>На головну</button>
            </Link>
        </div>
    );
};

export default Support;