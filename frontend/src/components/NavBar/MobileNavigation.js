import { useState } from 'react';
import NavLinks from './NavLinks';
import { MdOutlineClose, MdOutlineMenu } from 'react-icons/md';
import classes from './NavBar.module.css';

const MobileNavigation = () => {

    const [open, setOpen] = useState(false);

    const hamburgerBefore = () => {
        return (
            <MdOutlineMenu className={classes.HamburgerOpen} size="40px" onClick={() => setOpen(!open)}/>
        );
    };

    const hamburgerAfter = () => {
        return (
            <MdOutlineClose className={classes.HamburgerClose} size="40px" onClick={() => setOpen(!open)}/>
        );
    };

    const closeMobileMenu = () => setOpen(false);

    return (
        <nav className={classes.MobileNavigation}>
            {open ? hamburgerAfter() : hamburgerBefore()}
            {open && <NavLinks closeMobileMenu={closeMobileMenu} />}
        </nav>
    );
};
export default MobileNavigation;
