import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';
import classNames from 'classnames/bind';
import styles from './Bo1.module.scss';


const cx = classNames.bind(styles);


export default function B01like() {
    const [like, setLike] = useState('blue');

    const onLike = () => {
        setLike(prev => prev === 'blue' ? 'red' : 'blue')
    }

    return (
        <div>
            <button onClick={onLike}>
                <AiOutlineLike style={{ color: like }} />
            </button>
        </div>
    )
}
