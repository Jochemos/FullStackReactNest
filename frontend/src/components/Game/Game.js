import { GiFishingHook, GiTropicalFish } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import coral from './../../img/coral.png';
import reef from './../../img/reef.jpg';
import classes from './Game.module.css';

const Game = () => {

    const [fishPosition, setFishPosition] = useState(50);

    const [gameStarted, setGameStarted] = useState(false);

    const [trapHeight, setTrapHeight] = useState(20);

    const [trapLeft, setTrapLeft] = useState(80);

    const [stoneHeight, setStoneHeight] = useState(20);

    const [stoneLeft, setStoneLeft] = useState(40);

    const [score, setScore] = useState(0);


    useEffect(() => {

        document.getElementById('gameContainer').style.background = `url("${reef}")`;

        document.getElementById('gameContainer').style.backgroundPosition = 'right top 25%';

        document.getElementById('gameContainer').style.backgroundRepeat = 'no-repeat';

        document.getElementById('stone').style.background = `url("${coral}")`;

        document.getElementById('stone').style.backgroundSize = '100%';

        document.getElementById('stone').style.width = `${stoneHeight}%`;

        document.getElementById('stone').style.backgroundPosition = 'center';

        document.getElementById('stone').style.backgroundRepeat = 'no-repeat';

        document.getElementById('theFish').style.top = `${fishPosition}%`;

        document.getElementById('trap').style.height = `${trapHeight}%`;

        document.getElementById('trap').style.left = `${trapLeft}%`;

        document.getElementById('stone').style.left = `${stoneLeft}%`;

        document.getElementById('stone').style.height = `${stoneHeight}%`;


        let fallDown;

        if(gameStarted && fishPosition < 90) {

            fallDown = setInterval(() => {
                setFishPosition(fishPosition + 3);
                document.getElementById('theFish').style.transform = 'rotate(45deg)';
            }, 27);
        }

        return () => {
            clearInterval(fallDown);
        };
    }, [fishPosition]);



    useEffect(() => {
        let trap;

        if(gameStarted && trapLeft >= -10) {
            trap = setInterval(() => {
                setTrapLeft((trapLeft) => trapLeft - 1.5);
                setStoneLeft((stoneLeft) => stoneLeft - 2);

            }, 24);

            return () => {
                clearInterval(trap);

            };

        }else{
            setTrapLeft(100);
            setStoneLeft(120);
            setTrapHeight(Math.floor(Math.random() * 70));
            setStoneHeight(Math.floor(Math.random() * 40));

            if(gameStarted){
                setScore((score) => score + 1);
            }else{
                setScore(0);
            }


        }



    }, [trapLeft, gameStarted]);

    useEffect(() => {

        const hasCatch = fishPosition >= 0 && fishPosition < trapHeight && trapLeft < 10;
        const fishDown = fishPosition >= 90;

        if(hasCatch){

            document.getElementById('theFish').style.transform = 'rotate(-60deg)';
            document.getElementById('startButton').style.display = 'flex';

            setGameStarted(false);
            setFishPosition(50);
            setTrapHeight(52);
            setTrapLeft(6);
            setScore(0);
        }

        if(fishDown) {

            document.getElementById('theFish').style.transform = 'rotate(-60deg)';
            document.getElementById('startButton').style.display = 'flex';

            setScore(0);
        }




    }, [fishPosition, trapLeft, trapHeight, stoneHeight]);


    const getUp = () => {
        let newFishPosition = fishPosition - 24;
        document.getElementById('theFish').style.transform = 'rotate(-400deg)';
        document.getElementById('startButton').style.display = 'none';

        if(!gameStarted){
            setGameStarted(true);
            setTrapLeft(100);
        }else if(newFishPosition < 0) {
            setFishPosition(0);
        }else{
            setFishPosition(newFishPosition);
        }

        setFishPosition(newFishPosition);



    };


    return (
        <div className={classes.GameContainer} onClick={getUp} id="gameContainer">
            <div className={classes.TapStart} id="startButton" onClick={getUp}>
                <span className={classes.PulseButton} id="startButton">TAP !</span>
            </div>
            <div className={classes.Trap} id="trap">
                <div className={classes.Line}></div>
                <GiFishingHook className={classes.Hook} />
            </div>
            <div className={classes.Fish} id="theFish">
                <GiTropicalFish clasName={classes.Fish} />
            </div>
            <div className={classes.Stone} id="stone">

            </div>
            <div className={classes.Score}>
                {score}
            </div>
        </div>
    );
};

export default Game;
