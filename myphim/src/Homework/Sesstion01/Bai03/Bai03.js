import React from 'react';
import classNames from 'classnames/bind';
import styles from './Bai03.module.scss';
import image from './image/3.jpg';

const cx = classNames.bind(styles);

export default function Bai03() {
    return (
        <div className={cx('app')}>
            <div className={cx('wrapper')}>
                <img className={cx('img')} src={image} alt="" />
                <div className={cx('product')}>
                    <p className={cx('logy')}>Technology</p>
                    <h4 className={cx('title')}>Harman Kadon Onyx Studio Mini, Reviews & Experiences</h4>
                    <p className={cx('date')}>Feb 21, 2021 by <span className={cx('text')}>drfurion</span></p>
                </div>
            </div>
        </div>
    )
}
