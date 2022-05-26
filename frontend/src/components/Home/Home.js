import Typewriter from 'typewriter-effect';
import otherPlaza from './../../img/be.jpg';
import parrot from './../../img/parrot.png';
import plaza from './../../img/plaza.jpg';
import yacht from './../../img/yacht.png';
import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.Home} id="home">
            <div className={classes.Container}>
                <h1 className={classes.WriteOne}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString('Hello friend !')
                                .pauseFor(800)
                                .typeString('<br>')
                                .pauseFor(800)
                                .typeString('Welcome on my website...')
                                .pauseFor(800)
                                .deleteChars(24)
                                .typeString('Have a nice time :)')
                                .pauseFor(1500)
                                .deleteAll()
                                .start();
                        }}
                        options={{
                            loop: true,
                        }}
                    />
                </h1>
            </div>
            <img className={classes.Plaza} src={plaza} alt="plaza"></img>
            <img className={classes.PlazaTwo} src={otherPlaza} alt="plaza_2"></img>
            <img className={classes.Yacht} src={yacht} alt="yacht"></img>
            <img className={classes.Parrot} src={parrot} alt="parrot"></img>
        </div>
    );
};

export default Home;
