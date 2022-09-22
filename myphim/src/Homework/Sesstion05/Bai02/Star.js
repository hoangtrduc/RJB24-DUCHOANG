import React from 'react';
import ReactStars from "react-rating-stars-component";


export default function Star() {


    return (
        <div>
            <ReactStars
                count={5}
                size={24}
                a11y={true}
                activeColor="#ffd700"
            />
        </div>
    )
}
