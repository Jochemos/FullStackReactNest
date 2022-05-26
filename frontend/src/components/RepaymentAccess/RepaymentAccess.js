import { React } from 'react';
import Feedback from './../Feedback/Feedback';
import StrategyA from './strategy/strategyA';
import StrategyB from './strategy/strategyB';
import { BiChat } from 'react-icons/bi';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TiArrowBack } from 'react-icons/ti';
import otherClasses from './../Repayment/Repayment.module.css';
import classes from './RepaymentAccess.module.css';

const ValuesRender = (text, value) => {
    return (
        <div className={classes.SimpleBox}>
            <div className={classes.UpperInfo}>
                <p>{text}</p>
            </div>
            <div className={classes.CenterLine}></div>
            <div className={classes.BottomData}>
                <p>{value}  $</p>
            </div>
        </div>
    );
};

const changeView = () => {
    const modal = document.getElementById('spanner');
    modal.style.display = 'none';

};

const switchTextShow = () => {
    const modalTxt = document.getElementById('textTrue');
    modalTxt.style.visibility = 'visible';
    modalTxt.style.opacity = '1';

    const modalDesc = document.getElementById('descritpionTrue');
    modalDesc.style.visibility = 'visible';
    modalDesc.style.opacity = '1';

};

const switchTextSide = () => {
    const modalTxt = document.getElementById('textTrue');
    modalTxt.style.visibility = 'hidden';
    modalTxt.style.opacity = '0';

    const modalDesc = document.getElementById('descritpionTrue');
    modalDesc.style.visibility = 'hidden';
    modalDesc.style.opacity = '0';

};

const closePulseButton = () => {

    const pulseButton = document.getElementById('closeViewButtonFeedback');
    pulseButton.style.display = 'none';

    const widestViewFeedback = document.getElementById('widestViewFeedback');
    widestViewFeedback.style.display = 'flex';

    const changeSpaces = document.getElementById('mainContainer');
    changeSpaces.style.justifyContent = 'center';

};

const exitFeedbackPage = () => {
    const widestViewFeedback = document.getElementById('widestViewFeedback');
    widestViewFeedback.style.display = 'none';

    const pulseButton = document.getElementById('closeViewButtonFeedback');
    pulseButton.style.display = 'flex';

    const changeSpaces = document.getElementById('mainContainer');
    changeSpaces.style.justifyContent = 'space-evenly';

};



const AuthorizationAccept = (dataValues) => {

    const valuesArray = [];

    const implementStrategies = (dataValues) => {

        if(dataValues.commission === 0) {
            const result = StrategyA(dataValues);
            valuesArray.push(result.totalCostOfLoan);
            valuesArray.push(result.amountOfInstallment);
        }


        if(dataValues.commission > 0) {
            const result = StrategyB(dataValues);
            valuesArray.push(result.totalCostOfLoan);
            valuesArray.push(result.amountOfInstallment);
        }

        return valuesArray;

    };

    implementStrategies(dataValues);


    return (
        <span className={classes.SpanView} id="spanner">
            <div className={otherClasses.MainContainer}>
                <div className={otherClasses.Description}>
                    <h3>Your credit:</h3>
                </div>
                <div className={otherClasses.Line}></div>
                <div className={classes.CalcBox}>
                    <div className={classes.ResultContainer} id="mainContainer">
                        <div className={classes.Information}>
                            {ValuesRender('Total cost of loan:', valuesArray[0])}
                            {ValuesRender('Amount of installment:', valuesArray[1])}
                            <div className={classes.ButtonContainer}>
                                <button onClick={changeView}>Back to calc</button>
                                <TiArrowBack onClick={changeView} className={classes.MobileButton} />
                            </div>
                        </div>
                        <div className={classes.FeedbackBox} onMouseOver={switchTextShow} onMouseLeave={switchTextSide} onClick={closePulseButton} id="closeViewButtonFeedback">
                            <BiChat className={classes.FeedbackEmoti} />
                            <div className={classes.FeedbackText} id="textTrue">
                                <h1>FEEDBACK</h1>
                            </div>
                            <div className={classes.FeedbackDescription} id="descritpionTrue">
                                <p>For make currently calculator require many time, so if you like my hard work give me more power to next big steps on my technical way. Just <span>click</span> the button. All comments is public avilable, so I will pleasure to you about your sent texts will be culture.</p>
                            </div>
                        </div>
                        <div className={classes.WiderFeedback} id="widestViewFeedback">
                            <Feedback />
                            <div className={classes.ExitFeedbackPage} onClick={exitFeedbackPage}>
                                <RiArrowDownSLine className={classes.ArrowExit} />
                                <p>click for exit</p>
                                <RiArrowDownSLine className={classes.ArrowExit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    );

};

export default AuthorizationAccept;
