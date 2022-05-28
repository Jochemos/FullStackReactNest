import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthorizationAccept from './../RepaymentAccess/RepaymentAccess.js';
import Axios from '../../api/Axios.js';
import { FiPercent } from 'react-icons/fi';
import { MdAccessTime, MdAttachMoney } from 'react-icons/md';
import { RiAlertLine } from 'react-icons/ri';

import classes from './Repayment.module.css';


const furtherInputBox = (text, setValue, required) => {
    return(
        <div>
            <div className={classes.FurtherInputContainer}>
                <div className={classes.FurtherDescription}>
                    <p>{text}</p>
                </div>
                <div className={classes.InputBox}>
                    <div className={classes.InputOnly}>
                        <input
                            type="number"
                            onChange={setValue}
                        />
                        <div className={classes.BothInputObject}>
                            <FiPercent color='#0000b3' size='25px' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.RequiredInfo}>
                {required}
            </div>
        </div>
    );
};




function Repayment() {

    const [amount, setAmount] = useState(500);
    const [time, setTime] = useState(3);

    const [nominalInterest, setNominalInterest] = useState('');
    const [commission, setCommission] = useState('');

    const switchKey = () => {
        if(window.localStorage.getItem('logged') === 'true'){
            return true;
        }else{
            return false;
        }
    };

    const [rotateBox, setRotateBox] = useState('');

    const [changeBox, setChangeBox] = useState('');

    const loan = () => {

        Axios.post('/repayment', {
            'amountOfCredit': Number(amount),
            'repaymentPeriod': Number(time),
            'nominalInterest': Number(nominalInterest),
            'commission': Number(commission)
        }, { withCredentials: switchKey() }).then((response) => {
            if(response.status === 200){
                const modal = document.getElementById('spanner');
                modal.style.display = 'block';

                setRotateBox(AuthorizationAccept(response.data.data[0]));

            }
        }).catch(function (error) {


            if(error.response.status === 400){
                setChangeBox(
                    <div className={classes.AlertBox}>
                        {error.response.data.message}
                    </div>
                );
            }else{
                setRotateBox(
                    <div className={classes.RefuseAlert}>
                        <h1>If you want have acces to this posibilities you must be <Link to="/Login">logged</Link></h1>
                        <RiAlertLine className={classes.Warning} />
                    </div>
                );
            }
        });
    };

    return (

        <div className={classes.BackgroundEffect}>
            <div className={classes.MainContainer}>
                <div className={classes.Description}>
                    <h3>Calculate cost of your credit:</h3>
                </div>
                <div className={classes.Line}></div>
                <div className={classes.CalcBox}>
                    {/* Range One - Pick the amount credit ----- */}
                    <div className={classes.RangeSliderContainer}>
                        <div className={classes.DescriptionRange}>
                            <p>Amount of credit</p>
                        </div>
                        <div className={classes.RangeBox}>
                            <div className={classes.InputContainer}>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                />
                                <div className={classes.BothInputObject}>
                                    <MdAttachMoney color='#0000b3' size='25px' />
                                </div>
                            </div>
                            <div className={classes.RangeOnly}>
                                <input
                                    type="range"
                                    className={classes.Range}
                                    min={500}
                                    max={250000}
                                    value={amount}
                                    onChange={(e) => {
                                        setAmount(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={classes.NumbersBetween}>
                                <p>500</p>
                                <p>250000</p>
                            </div>
                        </div>
                    </div>
                    {/* END ---------- */}
                    {/* Range Two - Pick the time for pay */}
                    <div className={classes.RangeSliderContainer}>
                        <div className={classes.DescriptionRange}>
                            <p>Repayment period</p>
                        </div>
                        <div className={classes.RangeBox}>
                            <div className={classes.InputContainer}>
                                <input
                                    type="number"
                                    value={time}
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                    }}
                                />
                                <div className={classes.BothInputObject}>
                                    <MdAccessTime color='#0000b3' size='25px' />
                                </div>
                            </div>
                            <div className={classes.RangeOnly}>
                                <input
                                    type="range"
                                    className={classes.Range}
                                    min={3}
                                    max={120}
                                    value={time}
                                    onChange={(e) => {
                                        setTime(e.target.value);
                                    }}
                                />
                            </div>
                            <div className={classes.NumbersBetween}>
                                <p>3</p>
                                <p>120</p>
                            </div>
                        </div>
                    </div>
                    {/* END ---------- */}
                    {/* Further Input One - Nominal interest */}
                    {furtherInputBox('Nominal interest', (e) => setNominalInterest(e.target.value), changeBox)}
                    {/* Further Input One - Nominal interest */}
                    {furtherInputBox('Comission', (e) => setCommission(e.target.value), '')}
                    <div className={classes.Button}>
                        <button onClick={loan}>
              Calc cost of credit
                        </button>
                    </div>
                    {/* Result display after status correct. This fills parent container */}
                    <span className={classes.ResultBox} id="spanner">
                        {rotateBox}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Repayment;
