import SwitchBarAccount from './LoginLogout.js';

const NavLinks = (props) => {
    return (
        <ul>
            <li onClick={() => props.closeMobileMenu()}>
                <a href="/#home">Home</a>
            </li>
            <li onClick={() => props.closeMobileMenu()}>
                <a href="/#about">About me</a>
            </li>
            <li onClick={() => props.closeMobileMenu()}>
                <a href="/#skills">Skills</a>
            </li>
            <li onClick={() => props.closeMobileMenu()}>
                <a href="/#loan">Loan</a>
            </li>
            <li onClick={() => props.closeMobileMenu()}>
                <a href="/#contact">Contact</a>
            </li>
            <SwitchBarAccount />
        </ul>
    );
};

export default NavLinks;
