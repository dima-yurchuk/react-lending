import React from 'react';
import {Link} from "react-router-dom";

const Telegram = () => {
    let style={
        height: '600px'
    }
    let hStyle = {
        color : 'lightgreen'
    }
    return (
        <div>
            <div align={'center'} style={style}>
                <h3 style={hStyle}>Telegram</h3><br/>
                <Link to={'/'}>
                    <button>На головну</button>
                </Link>
            </div>
        </div>
    );
};

export default Telegram;