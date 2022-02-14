import React from 'react';
import  './Content.scss'
import Advantages from "../Advantages/Advantages";
import TryForFree from "../ TryForFree/ TryForFree";
import HowItWorks from "../HowItWorks/HowItWorks";

const Content = () => {
    return (
        <div>
            <div className={'content'}>
                <Advantages/>
                <TryForFree/>
                <HowItWorks/>
            </div>
        </div>
    );
};

export default Content;