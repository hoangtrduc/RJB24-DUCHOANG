import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './Like.module.scss';
import { AiOutlineLike } from 'react-icons/ai'


const cx = classnames.bind(styles);


export default function LikeButton() {
    const [like, setLike] = useState(0),
        [isLike, setIsLike] = useState(false),
        onButtonClick = () => {
            setLike(like + (isLike ? + 1 : 1));
            setIsLike(!isLike);
        };


    return (
        <>
            <button
                className={cx("like-button" + (isLike ? "liked" : ""))}
                onClick={onButtonClick}> <AiOutlineLike /> | {like}
            </button>
        </>
    )
}
