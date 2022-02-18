import React from 'react';
import './StepsLine.scss'

const StepsLine = () => {
    return (
        <div className={'steps-line'}>
            <img src={'/images/stepsLine/step1.png'}/>
            <img src={'/images/stepsLine/stepRow.png'} style={{marginTop:3}}/>
            <img src={'/images/stepsLine/step2.png'} style={{marginTop:3}}/>
            <img src={'/images/stepsLine/stepRow.png'} style={{marginTop:3}}/>
            <img src={'/images/stepsLine/step3.png'} style={{marginTop:3}}/>
            <img src={'/images/stepsLine/stepRow.png'} style={{marginTop:3}}/>
            <img src={'/images/stepsLine/step4.png'} style={{marginTop:3}}/>
            <img src={'/images/stepsLine/stepRow.png'} style={{marginTop:3}}/>
            <img src={'/images/stepsLine/step5.png'} style={{marginTop:3}}/>
        </div>
    );
};

export default StepsLine;