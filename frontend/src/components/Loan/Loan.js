import { Link } from 'react-router-dom';
import Credit from './../../img/credit.jpg';
import PageHeader from './../PageHeader/PageHeader.js';
import Vacation from './../../img/vacation.jpg';
import background from './../../img/beach.jpg';
import button from './../../img/play-button.png';
import classes from './Loan.module.css';

const playBtn = (url) => {
    return (
        <div className={classes.PlayBtnContainer} onClick={() => window.open(url, '_blank').focus}>
            <img className={classes.PlayButton} src={button} alt="button" />
        </div>
    );
};

const youtubeVideo = (url, thumbnail, description) => {
    return(
        <div className={classes.VideoContainer}>
            <div className={classes.Thumbnail}>
                {playBtn(url)}
                <img src={thumbnail} alt="thumbnail"></img>
            </div>
            <div className={classes.Text}>
                <p>{description}</p>
            </div>
        </div>
    );
};

const vacationDescription = 'Click the button... you would see what exacly I mean pronounce "wish"';

const creditDescription = 'A lot of banks makes possible grant credits on many way of amount.';

const Loan = () => {
    return (
        <div className={classes.YouTube} id="loan">
            <img className={classes.Background} src={background} alt="background" />
            <PageHeader title={'Credit calculator'} />
            <div className={classes.YouTubeContent}>
                <div className={classes.Paragraph}>
                    <p>
            Have you any wish? I hope so, because who haven't... for example my wish is really expensive vacation. We can have this imagine in reach on our hand by credit enough. I created simple calculator for this which may provide us informations about  amount of installments. I recommend my credit calculator, which open after click the button under videos.
                    </p>
                </div>
                <div className={classes.Videos}>
                    {youtubeVideo('https://www.youtube.com/watch?v=vYmTdUPr6JM', Vacation, vacationDescription)}
                    {youtubeVideo('https://www.youtube.com/watch?v=3iYiNAr8mX4', Credit, creditDescription)}
                </div>
                <div className={classes.Button}>
                    <Link to="/Loan">CLICK FOR CALCULATE YOUR POTENTIAL LOAN</Link>
                </div>
            </div>
        </div>
    );
};

export default Loan;
