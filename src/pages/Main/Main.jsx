import React from 'react';
import  './Main.scss'
import Advantages from "../../components/Advantages/Advantages";
import TryForFree from "../../components/ TryForFree/ TryForFree";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import KeyPoints from "../../components/KeyPoints/KeyPoints";
import WhoNeeds from "../../components/WhoNeeds/WhoNeeds";
import Reviews from "../../components/Reviews/Reviews";

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