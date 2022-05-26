import { React, useState } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import classes from './AddPhoto.module.css';

const AddPhoto = () => {

    const [imgPrev, setImgPrev] = useState(null);
    const [error, setError] = useState(false);

    const imageChange = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg'];
        if(selected && ALLOWED_TYPES.includes(selected.type)) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImgPrev(reader.result);
            };
            reader.readAsDataURL(selected);
            setError(false);
        } else {
            setError(true);
        }
    };


    return (
        <div className={classes.UserPhotoContainer}>
            <div className={classes.ErrorBox}>
                {error && <p className="errorMsg" id="error">File not supported</p>}
            </div>
            <div
                className={classes.ImgPrev}
                style={{
                    background: imgPrev ? `url("${imgPrev}") no-repeat center/cover` : '#353839'
                }}
            >
                {imgPrev && (
                    <button onClick={ () => setImgPrev(null) }>Remove image</button>
                )}

                {!imgPrev && (
                    <>
                        <AiOutlineUserAdd className={classes.IconUser}/>
                        <p>Add an image</p>
                        <label htmlFor="fileUpload" className={classes.CustomFile}>
              Choose file
                        </label>
                        <input type="file" id="fileUpload" onChange={imageChange} />
                        <span>(jpg, jpeg or png)</span>
                    </>
                )}
            </div>
        </div>
    );
};

export default AddPhoto;
