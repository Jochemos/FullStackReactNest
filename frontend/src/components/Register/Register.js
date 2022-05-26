import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterStringChange from './RegisterStringChange.js';
import axios from 'axios';
import oneOfUs from './../../img/oneOfUs2.png';
import park from './../../img/park.svg';
import classes from './Register.module.css';


const RegisterAccept = () => {
    return (
        <div className={classes.RegisterAccept}>
            <div className={classes.FirstText}>
                <h1>Now, you are <span>with us !</span></h1>
            </div>
            <h2>You may login...</h2>
            <div className={classes.ImgBox}>
                <img className={classes.Hello} src={oneOfUs} alt="hello" />
                <Link to="/Login"><button>LOG IN !</button></Link>
            </div>
        </div>
    );
};


const showFunction = () => {
    const pwd = document.getElementById('pwd');
    const conPwd = document.getElementById('conpwd');
    if (pwd.type === 'password' && conPwd.type === 'password') {
        pwd.type = 'text';
        conPwd.type = 'text';
    } else {
        pwd.type = 'password';
        conPwd.type = 'password';
    }
};


function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [pwdCon, setPwdCon] = useState('');

    const [changeBox, setChangeBox] = useState('Create Account !');

    const [appearBox, setAppearBox] = useState('');

    const registerClick = () => {
        axios.post('http://localhost:7072/v2/anonymous/register', {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'password': pwd,
            'confirmPassword': pwdCon
        }).then(() => {

            const backgroundHidden = document.getElementById('behindContainer');
            backgroundHidden.style.display = 'none';

            setAppearBox(<RegisterAccept />);

        }).catch((error) => {

            return (
                setChangeBox(
                    <div className={classes.RegisterStatus}>
                        <RegisterStringChange string={error.response.data.message[0]} />
                    </div>
                )

            );});
    };

    const hadleLogin = (e) => {
        e.preventDefault();
    };

    return (
        <div className={classes.MainContainer}>
            {appearBox}
            <div className={classes.RegisterBox} id="behindContainer">
                <div className={classes.MainText}>
                    {changeBox}
                </div>
                <div className={classes.RegisterForm}>
                    <form onSubmit={hadleLogin}>
                        <label htmlFor="firstname">First Name</label>
                        <input
                            placeholder="Enter your first name"
                            type="firstname"
                            id="firstname"
                            onChange={(e) => {
                                setFirstName(e.target.value);
                            }}
                        />
                        <label htmlFor="lastname">Last Name</label>
                        <input
                            placeholder="Enter your last name"
                            type="lastname"
                            id="lastname"
                            onChange={(e) => {
                                setLastName(e.target.value);
                            }}
                        />
                        <label htmlFor="email">Email</label>
                        <input
                            placeholder="Enter your current email"
                            type="email"
                            id="email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Enter password"
                            type="password"
                            id="pwd"
                            onChange={(e) => {
                                setPwd(e.target.value);
                            }}
                        />
                        <label htmlFor="conpwd">Confirm Password</label>
                        <div className={classes.InteractiveBox}>
                            <input
                                placeholder="Confirm the password"
                                type="password"
                                id="conpwd"
                                onChange={(e) => {
                                    setPwdCon(e.target.value);
                                }}
                            />
                            <input
                                className={classes.InputCheckbox}
                                type="checkbox"
                                onClick={showFunction}
                            />
                        </div>
                        <button
                            className={classes.BottonSubmit}
                            type="submit"
                            onClick={registerClick}
                        >
              Submit
                        </button>
                    </form>
                </div>
                <div className={classes.Footer}>
                    <p>Already have an Account? <Link to="/Login">Sign In</Link></p>
                </div>
            </div>
            <div className={classes.DescriptionBox}>
                <h1 className={classes.TextOne}>Register now</h1>
                <h1 className={classes.TextTwo}>... and join to us.</h1>
                <h2 className={classes.TextThree}>New place waiting for you already !</h2>
            </div>
            <div className={classes.ImageBox}>
                <img className={classes.Park} src={park} alt="park" />
            </div>
        </div>
    );
}

export default Register;
