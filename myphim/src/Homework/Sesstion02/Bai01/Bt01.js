import React from 'react';
import classNames from 'classnames/bind';
import styles from './Bai.module.scss'
import image from './Img/1.jpg'

const cx = classNames.bind(styles)

export default function Bt01() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('product')}>
                <img src={image} alt="" className={cx('img')} />
                <div className={cx('content')}>
                    <h4 className={cx('title pb-3 text-black font-bold')}>Clothing & Apparel</h4>
                    <p className={cx('text pb-3')}>Accessories</p>
                    <p className={cx('text pb-3')}>Bags</p>
                    <p className={cx('text pb-3')}>Kid's Fashion</p>
                    <p className={cx('text pb-3')}>Mens</p>
                </div>
            </div>
        </div>
    )
}
