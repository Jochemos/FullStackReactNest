import PageHeader from './../PageHeader/PageHeader.js';
import desk from './../../img/desk.png';
import classes from './Skills.module.css';

const backendSills =
  <ul>
      <li>BACKEND</li>
      <li>Nest.JS / TypeORM / TypeScript</li>
  </ul>;

const basicsSkills =
  <ul>
      <li>BASICS</li>
      <li>JavaScript / TypeScript / Prototypes</li>
  </ul>;

const algoSkills =
  <ul>
      <li>ALGORITHMS</li>
      <li>JavaScript / Data Structures</li>
  </ul>;

const totalSkills = [backendSills, basicsSkills, algoSkills];

const Skills = () => {
    return (
        <div className={classes.Skills} id="skills">
            <PageHeader title={'What about the Skills?'} />
            <p>
        This case contain all my repositories which I consist in github site. If you have a little bit time check my code, please.
        If you find somethig what you prefer produce otherwise, I will be really pleasure for feedback, which you can send to my mail:
                <p> danjoch@onet.pl </p>
            </p>
            <div className={classes.Container}>
                <img className={classes.Desk} src={desk} alt="desk" />
                {totalSkills.map(skills => {
                    return (
                        <div className={classes.List}>
                            {skills}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
