import { Link } from 'react-router-dom';
import { useState } from 'react';
import ModalLogin from './../LoginCorrect/LoginCorrect.js';
import Axios from '../../api/Axios.js';
import hello from './../../img/hello.svg';
import classes from './Login.module.css';


const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');

    const [openModal, setOpenModal] = useState(false);

    const loginClick = () => {
        Axios.post('/anonymous/login', {
            'email': email,
            'password': password
        }, { withCredentials: true }).then((response) => {
            if(response.status === 200){

                const backgroundHidden = document.getElementById('behindContainer');
                backgroundHidden.style.visibility = 'hidden';

                setOpenModal(true);
                window.localStorage.clear();

                const user = response.data.data;
                window.localStorage.setItem('logged', true);
                window.localStorage.setItem('user', JSON.stringify(user));

            }
        }).catch((error) => {
            setLoginStatus(
                <div className={classes.AlertBox}>
                    <h1>Check your login or password...</h1>
                </div>
            );
            console.log(error.response);
        });
    };

    const hadleLogin = (e) => {
        e.preventDefault();
    };

    return (

        <div className={classes.MainContainer}>
            <div className={classes.LoginContainer} id="behindContainer">
                <div className={classes.LeftSide}>
                    <img className={classes.Hello} src={hello} alt="hello" />
                    <h1>Welcome back ;)</h1>
                </div>
                <div className={classes.RightSide}>
                    <div className={classes.VisibleForMobile}>
                        <img src={hello} alt="hello" />
                        <h1>Welcome back ;)</h1>
                    </div>
                    <div className={classes.AlertBoxContainer}>{loginStatus}</div>
                    <form onSubmit={hadleLogin}>
                        <label htmlFor="email1">Email</label>
                        <input
                            placeholder="Enter your email..."
                            type="email"
                            id="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <label htmlFor="pwd1">Password</label>
                        <input
                            placeholder="Enter password"
                            type="password"
                            id="pwd"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <button onClick={loginClick}>
                Submit
                        </button>
                    </form>
                    <div className={classes.RegisterNow}>
                        <h4>Don't have an Account? <Link to="/Register">Register Now</Link></h4>
                    </div>
                </div>
            </div>
            {openModal && <ModalLogin />}
        </div>

    );
};

export default Login;
