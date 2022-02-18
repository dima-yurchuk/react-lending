import React from 'react';
import  './Main.scss'
import Advantages from "./Advantages/Advantages";
import TryForFree from "./ TryForFree/ TryForFree";
import HowItWorks from "./HowItWorks/HowItWorks";
import KeyPoints from "./KeyPoints/KeyPoints";
import WhoNeeds from "./WhoNeeds/WhoNeeds";
import Reviews from "./Reviews/Reviews";

const Main = () => {
    return (
        <div>
            <div className={'content'}>
                <Advantages/>
                <TryForFree/>
                <HowItWorks/>
                <TryForFree/>
                <KeyPoints/>
                <TryForFree/>
                <WhoNeeds/>
                <TryForFree/>
                <Reviews/>
            </div>
        </div>
    );
};

export default Main;