import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../api/Axios.js';
import { GiBoatFishing, GiHills, GiMountainRoad, GiPalmTree } from 'react-icons/gi';
import { BsCreditCard2Back, BsMenuButtonWide } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import AddPhoto from './../AddPhoto/AddPhoto.js';
import Farm from './../../img/Farm/CompMedium.jpg';
import Game from './../Game/Game.js';
import Mountain from './../../img/Mountains/CompMedium.jpg';
import Sea from './../../img/Sea/CompMedium.jpg';
import classes from './Profile.module.css';




const hillWallpaper = () => {

    const mainContent = document.getElementById('fullContent');
    const userContent = document.getElementById('userContent');
    mainContent.style.background = '#abcdef';
    userContent.style.background = `url("${Mountain}")`;
    userContent.style.backgroundPosition = 'top 38% left 0';
    userContent.style.backgroundSize = '100% auto';

};

const seaWallpaper = () => {

    const mainContent = document.getElementById('fullContent');
    const userContent = document.getElementById('userContent');
    mainContent.style.background = '#45b1e8';
    userContent.style.background = `url("${Sea}")`;
    userContent.style.backgroundPosition = 'center top 30%';
    userContent.style.backgroundSize = '100% auto';

};

const farmWallpaper = () => {

    const mainContent = document.getElementById('fullContent');
    const userContent = document.getElementById('userContent');
    mainContent.style.background = '#bdda57';
    userContent.style.background = `url("${Farm}")`;
    userContent.style.backgroundPosition = 'center';
    userContent.style.backgroundSize = '100% auto';

};



const Profile = () => {

    const logOut = () => {

        window.localStorage.clear();
        window.localStorage.setItem('logged', false);

    };

    const switchKey = () => {
        if(window.localStorage.getItem('logged') === 'true'){
            return true;
        }else{
            return false;
        }
    };

    const [data, setData] = useState({'user': []});

    const fullName = window.localStorage.getItem('user');
    const firstName = fullName.slice(1, fullName.indexOf(' '));
    const lastName = fullName.slice(fullName.indexOf(' ')+1, -1);

    useEffect(() => {


        const getData = async () => {
            await Axios.get(`/${firstName}.${lastName}/profile`, { withCredentials: switchKey() })
                .then((response) => {
                    setData({'user': response.data.data});
                })
                .catch((error) => {
                    console.log(error.response);
                });

        };
        getData();

    }, []);

    const user = data['user'];

    const [turnBack, setTurnBack] = useState('');

    const openGame = () => {
        const gameContent = document.getElementById('interactiveContent');
        const openGameContent = document.getElementById('interactiveButton');
        gameContent.style.display = 'flex';
        gameContent.style.position = 'absolute';
        gameContent.style.top = '0';
        gameContent.style.left = '0';
        gameContent.style.width = '100%';
        gameContent.style.height = '100%';
        gameContent.style.borderRadius = '0px';
        openGameContent.style.display = 'none';

        setTurnBack(
            <div className={classes.ExitButton} onClick={closeGame}>
                <h1>Exit</h1>
            </div>
        );

    };

    const closeGame = () => {
        const gameContent = document.getElementById('interactiveContent');
        const openGameContent = document.getElementById('interactiveButton');
        gameContent.style.display = 'none';
        openGameContent.style.display = 'flex';

    };

    return (
        <div className={classes.MainContentBox} id="fullContent">
            <div className={classes.WallpapersContent}>
                <div className={classes.SimpleButton} onClick={hillWallpaper}>
                    <GiMountainRoad className={classes.VibeIconHill} />
                </div>
                <div className={classes.SimpleButton} onClick={seaWallpaper}>
                    <GiPalmTree className={classes.VibeIconPalm} />
                </div>
                <div className={classes.SimpleButton} onClick={farmWallpaper}>
                    <GiHills className={classes.VibeIconFarm} />
                </div>
            </div>
            <div className={classes.InfoFunction}>
                <h4>VIBE CHANGER (JUST CLICK)</h4>
            </div>
            <div className={classes.SideContent}>
                <Link to="/">
                    <div className={classes.Button}>
                        <p>M</p> <p>E</p> <p>N</p> <p>U</p>
                        <BsMenuButtonWide className={classes.IconContent} />
                    </div>
                </Link>
                <Link to="/Loan">
                    <div className={classes.Button}>
                        <p>L</p> <p>O</p> <p>A</p> <p>N</p>
                        <BsCreditCard2Back className={classes.IconContent} />
                    </div>
                </Link>
                <Link to="/">
                    <span>
                        <div className={classes.Button} onClick={logOut}>
                            <p>L</p> <p>O</p> <p>G</p> <p>O</p> <p>U</p> <p>T</p>
                            <BiLogOut className={classes.IconContent} />
                        </div>
                    </span>
                </Link>
            </div>
            <div className={classes.TextContent}>
                <h1>Hello again {firstName} !</h1>
            </div>
            <div className={classes.BaseContent}>
                <div className={classes.User} id="userContent">
                    <div className={classes.AddPhoto}>
                        <AddPhoto />
                    </div>
                    <div className={classes.UserInfo}>
                        {user.map((e) => {
                            return(
                                <>
                                    <h1>User Data</h1>
                                    <h2>Firstname: <span>{ e.firstName }</span></h2>
                                    <h2>Lastname: <span>{ e.lastName }</span></h2>
                                    <h2>Email: <span>{ e.email }</span></h2>
                                </>
                            );
                        })}
                    </div>
                </div>
                <div className={classes.Interactive}>
                    <div className={classes.Description}>
                        <h3> Feel boring? Maybe play? Click below ! </h3>
                        <GiBoatFishing className={classes.Boat} />
                    </div>
                    <div className={classes.Content} id="interactiveContent">
                        <Game />
                        { turnBack }
                    </div>
                    <div className={classes.PortraitMediaButton} id="interactiveButton" onClick={openGame}>
                        <p>PLAY</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
