import React from 'react';
import { Link } from 'react-router-dom';
import way from './../../img/way.svg';
import classes from './LoginCorrect.module.css';

const ModalLogin = () => {
    return (
        <div className={classes.Background}>
            <div className={classes.MainContainer}>
                <div className={classes.Info}>
                    <h1>I'm very pleased that you returned to my site :)</h1>
                    <div className={classes.ImageView}>
                        <img className={classes.Img} src={way} alt="way" />
                    </div>
                    <div className={classes.Buttons}>
                        <Link to="/" className={classes.ButtonMenu}>
                            <button>
                  Main Menu
                            </button>
                        </Link>
                        <Link to="/Profile" className={classes.ButtonProfile}>
                            <button>
                  Your Profile
                            </button>
                        </Link>
                    </div>
                    <h2>Please, pick your best way, which you want go...</h2>
                </div>
            </div>
        </div>
    );
};

export default ModalLogin;
