import React, { useState } from 'react';
import { AiOutlineLike } from 'react-icons/ai';


export default function Like() {
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
