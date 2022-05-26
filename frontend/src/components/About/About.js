import PageHeader from './../PageHeader/PageHeader.js';
import classes from './About.module.css';
import face from './../../img/face.jpg';

const About = () => {
    return (
        <div className={classes.AboutMe} id="about">
            <PageHeader title={'About me'}/>
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I'm Daniel</h2>
                    <p>
            I'm really glad to you about your interest my website. Let me show you something about me. I'm beginner software developer based in the Poland and my best way for kill boring is programming. Yes... also like others my road to this stage was very difficulty but I found in this my peace and enjoy. Below you can see all my repositories about JavaSript, TypeScript, Nest.JS and more. It's not all because my interesting is also knowledge on any case like cosmos, nature, countries and even paranormal activity, which is so good if you don't want sleep quite in night. It's very beneficial for programist, which have a lot of work, but I think that if something you like you don't need even coffe for not sleep. If you are gamer, I too but I divide free time with reading books also. I invite you for further explore my portfolio site.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Face} src={face} alt="face"></img>
                </div>
            </div>
        </div>
    );
};

export default About;
