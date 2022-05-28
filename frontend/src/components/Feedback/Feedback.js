import { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { GiLoveLetter } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import Axios from '../../api/Axios.js';
import classes from './Feedback.module.css';


const Feedback = () => {

    const fullName = window.localStorage.getItem('user');
    const firstName = fullName.slice(1, fullName.indexOf(' '));
    const lastName = fullName.slice(fullName.indexOf(' ')+1, -1);


    const [data, setData] = useState({'users': []});

    useEffect(() => {

        const getData = async () => {
            await Axios.get(`/${firstName}.${lastName}/allcomments`, { withCredentials: true })
                .then((response) => {
                    setData({'users': response.data});
                })
                .catch((error) => {
                    console.log(error.response);
                });

        };
        getData();



    }, [firstName, lastName]);

    const users = data['users'];


    const [comment, setComment] = useState('');
    const [modalComment, setModalComment] = useState('');
    const [modalFinal, setModalFinal] = useState('');

    const addComment = () => {
        Axios.put(`/${firstName}.${lastName}/addcomment`, {
            'comment': comment
        }, { withCredentials: true }).then((response) => {
            if(response.status === 200) {

                setModalComment(
                    <div className={classes.NewCommentBox} key={response.data.commentId}>
                        <div className={classes.Author}>
                            {response.data.author}
                        </div>
                        <div className={classes.Data}>
                            {`${response.data.created_At.slice(0, 10)} at ${response.data.created_At.slice(11, 16)}`}
                        </div>
                        <div className={classes.Text}>
                            {response.data.comment}
                        </div>
                    </div>
                );

                document.getElementById('comments').animate([
                    {opacity: 1},
                    {opacity: 0}
                ], {
                    duration: 1000,
                    delay: 1700,
                });

                document.getElementById('input').animate([
                    {opacity: 1},
                    {opacity: 0}
                ], {
                    duration: 1000,
                    delay: 1700,
                });

                document.getElementById('button').animate([
                    {opacity: 1},
                    {opacity: 0}
                ], {
                    duration: 1000,
                    delay: 1700,
                });

                setTimeout(() => {
                    document.getElementById('comments').style.display = 'none';
                }, 2701);

                setTimeout(() => {
                    document.getElementById('input').style.display = 'none';
                }, 2701);

                setTimeout(() => {
                    document.getElementById('button').style.display = 'none';
                }, 2701);


                setTimeout(() => {
                    setModalFinal(
                        <div className={classes.ThanksForFinal}>
                            <div className={classes.ThanksText}>
                                <h2>Thanks for your comment ! :)</h2>
                            </div>
                            <div className={classes.ThanksImg}>
                                <GiLoveLetter />
                            </div>
                            <div className={classes.ThanksPassProfile}>
                                <h3>If you want some funny spend your time, go to your</h3>
                                <Link to="/Profile">profile</Link>
                            </div>
                        </div>
                    );

                }, 2800);

            }
        }).catch( (error) => {
            console.log(error.response);
        });
    };




    return (
        <div className={classes.FeedbackContainer}>
            <div className={classes.CommentsContainer} id="comments">
                { modalComment }
                {users.map((e) => {
                    return (
                        <div className={classes.CommentBox} key={e.commentId}>
                            <div className={classes.Author}>
                                {e.author}
                            </div>
                            <div className={classes.Data}>
                                {`${e.created_At.slice(0, 10)} at ${e.created_At.slice(11, 16)}`}
                            </div>
                            <div className={classes.Text}>
                                {e.comment}
                            </div>
                        </div>
                    );
                })}

            </div>

            <div className={classes.InputContainer} id="input">
                <textarea
                    placeholder="Express your opinion..."
                    type="comment"
                    id="comment"
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                />

                <button type="send" onClick={addComment} id="button">
                    <FiMail className={classes.MailPics} />
                </button>
            </div>
            { modalFinal }
        </div>
    );
};

export default Feedback;
