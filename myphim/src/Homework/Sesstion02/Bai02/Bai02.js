import React from 'react'
import classNames from 'classnames/bind'
import styles from './Main.module.scss'
import image from './Image/2.jpg'

const cx = classNames.bind(styles)

export default function Bai02() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('smart')}>
                <img src={image} alt="" className={cx('cn_img')} />
                <div className={cx('info')}>
                    <p className={cx('shop')}>young shop</p>
                    <h4 className={cx('samsung')}><a href="">Samsung UHD TV 24inch</a></h4>
                    <div className={cx('like')}>
                        <i className={cx('star')} class="fa-solid fa-star "></i>
                        <i className={cx('star')} class="fa-solid fa-star "></i>
                        <i className={cx('star')} class="fa-solid fa-star "></i>
                        <i className={cx('star')} class="fa-solid fa-star "></i>
                        <i className="fa-regular fa-star "></i>
                        <span className={cx('number')}>02</span>
                    </div>
                    <span className={cx('price')}>$599</span>
                </div>
            </div>
        </div>
    )
}
