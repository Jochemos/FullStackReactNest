import { Link } from 'react-router-dom';
import { BiExit } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { GiExitDoor } from 'react-icons/gi';
import { RiProfileLine } from 'react-icons/ri';
import classes from './NavBar.module.css';

const logOut = () => {

    window.localStorage.clear();
    window.localStorage.setItem('logged', false);

};


const SwitchBarAccount = () => {

    const reloadPage = () => {
        window.location.reload();
        logOut();

    };

    const openOptions = () => {
        const accountView = document.getElementById('accountRotate');
        accountView.style.transform = 'rotate(360deg)';

        const toolTip = document.getElementById('toolTip');
        toolTip.style.visibility = 'visible';

        const arrowTip = document.getElementById('arrowTip');
        arrowTip.style.visibility = 'visible';
    };

    const closeOptions = () => {
        const accountView = document.getElementById('accountRotate');
        accountView.style.transform = 'rotate(0deg)';

        const toolTip = document.getElementById('toolTip');
        toolTip.style.visibility = 'hidden';

        const arrowTip = document.getElementById('arrowTip');
        arrowTip.style.visibility = 'hidden';
    };

    if(window.localStorage.getItem('logged') === 'true') {
        return (
            <div className={classes.LoggedBox}>
                <div className={classes.AccountView}>

                    <span className={classes.OptionsTooltip} id="toolTip">

                        <div className={classes.ExitBox}>
                            <BiExit onClick={closeOptions} className={classes.Exit} color='white' size='35px' />
                        </div>

                        <div className={classes.DivideLine}>
                            <hr />
                        </div>

                        <div className={classes.LinkBox}>
                            <Link to="/Profile">Profile</Link>
                            <RiProfileLine color='white' size='20px' />
                        </div>

                        <div className={classes.LinkBox}>
                            <p onClick={reloadPage}>Logout</p>
                            <GiExitDoor color='white' size='20px' />
                        </div>


                    </span>

                    <div className={classes.ArrowBeside} id="arrowTip"></div>

                    <CgProfile className={classes.ProfileLink} onClick={openOptions} id="accountRotate" color='white' />


                </div>
                <div className={classes.AccountViewMobile}>
                    <Link to="/Profile">
                        <CgProfile className={classes.ProfileLink} color='white' />
                    </Link>
                </div>
            </div>
        );
    }else {
        return (
            <span>
                <li>
                    <Link to="/Register">Register</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </span>
        );
    }
};

export default SwitchBarAccount;
