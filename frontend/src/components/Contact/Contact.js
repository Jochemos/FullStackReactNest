import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import classes from './Contact.module.css';

const handleURL = (url) => {
    return () => window.open(url, '_blank');
};

const Contact = () => {
    return (
        <div className={classes.Contact} id="contact">
            <div className={classes.ContactIcons}>
                <FaGithub color='#99ff99' size='40px' style={{padding: '1%'}}
                    onClick={handleURL('https://github.com/Jochemos')} />
                <FaFacebook color='#99ff99' size='40px' style={{padding: '1%'}}
                    onClick={handleURL('https://www.facebook.com/yuki.alex.319')} />
                <FaLinkedin color='#99ff99' size='40px' style={{padding: '1%'}}
                    onClick={handleURL('https://www.linkedin.com/in/daniel-jochemczyk-29818622b')} />
            </div>
        </div>
    );
};

export default Contact;
