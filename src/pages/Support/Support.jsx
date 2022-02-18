import React from 'react';
import {Link} from "react-router-dom";

const Support = () => {
    let style={
        height: '600px'
    }
    let hStyle = {
        color: 'cadetblue'
    }
    return (
        <div>
            <div align={'center'} style={style}>
                <h3 style={hStyle}>Підтримка</h3><br/>
                <Link to={'/'}>
                    <button>На головну</button>
                </Link>
            </div>
        </div>
    );
};

export default Support;