import React from 'react';
import  './Content.scss'
import Advantages from "./Advantages/Advantages";
import TryForFree from "./ TryForFree/ TryForFree";
import HowItWorks from "./HowItWorks/HowItWorks";
import KeyPoints from "./KeyPoints/KeyPoints";
import WhoNeeds from "./WhoNeeds/WhoNeeds";

const Content = () => {
    return (
        <div>
            <div className={'content'}>
                <Advantages/>
                <TryForFree/>
                <TryForFree/>
                <KeyPoints/>
                <TryForFree/>
                <WhoNeeds/>
                <TryForFree/>
            </div>
        </div>
    );
};

export default Content;